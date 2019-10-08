const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const postcssNormalize = require('postcss-normalize');
const appPackageJson = require(paths.appPackageJson);

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'), //处理style文件
    {
      loader: require.resolve('css-loader'), //处理css文件
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'), //css文件预处理
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: { //添加不同浏览器css前缀
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          postcssNormalize(),
        ],
        sourceMap: false,
      },
    },
  ].filter(Boolean);

  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: false,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    );
  }
  return loaders;
};

module.exports = {
  mode: 'development',
  bail: false,
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ].filter(Boolean),
  output: {
    path: undefined,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    futureEmitAssets: true,
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    jsonpFunction: `webpackJsonp${appPackageJson.name}`,
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      modules.additionalModulePaths || []
    ),
    extensions: paths.moduleFileExtensions
      .map(ext => `.${ext}`)
      .filter(ext => useTypeScript || !ext.includes('ts')),
    alias: {
      'react-native': 'react-native-web',
      '@': path.resolve('src'),
      '@pages': path.resolve('src/pages'),
      '@api': path.resolve('src/api'),
      '@common': path.resolve('src/common'),
      '@utils': path.resolve('src/utils'),
      '@assets': path.resolve('src/assets'),
      'react-dom': '@hot-loader/react-dom',
    },
    plugins: [
      PnpWebpackPlugin,
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: imageInlineSizeLimit,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),

              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: false,
            },
          },
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false,
            }),
            sideEffects: true,
          },
          {
            test: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }),
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: paths.appHtml,
        }
      )
    ),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: publicPath,
      generate: (seed, files) => {
        const manifestFiles = files.reduce(function (manifest, file) {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
        };
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    useTypeScript &&
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: paths.appNodeModules,
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      resolveModuleNameModule: process.versions.pnp
        ? `${__dirname}/pnpTs.js`
        : undefined,
      resolveTypeReferenceDirectiveModule: process.versions.pnp
        ? `${__dirname}/pnpTs.js`
        : undefined,
      tsconfig: paths.appTsConfig,
      reportFiles: [
        '**',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*',
      ],
      watch: paths.appSrc,
      silent: true,
    }),
  ].filter(Boolean),
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};

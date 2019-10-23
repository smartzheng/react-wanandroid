/*
 * @Date: 2019-09-29 17:38:01
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:58:32
 */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Main from './pages/main';
import BannerDetail from './pages/bannerDetail';
import Header from '@/common/header';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Route component={Main} path={'/'} exact />
        <Route component={BannerDetail} path={'/bannerDetail/:id'} exact />
      </Provider>
    </BrowserRouter>
  );
}

export default hot(App);

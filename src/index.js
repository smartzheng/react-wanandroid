/*
 * @Date: 2019-09-29 17:38:01
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:02:03
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from '@/style';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>
  , document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}


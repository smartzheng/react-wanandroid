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


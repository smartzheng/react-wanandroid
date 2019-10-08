import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@assets/reset.css';
import '@assets/border.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}


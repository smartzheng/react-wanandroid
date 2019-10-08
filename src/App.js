import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store'
import Home from './pages/home';
function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </HashRouter>
  );
}

export default hot(App);

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import QuickSandRegular from '../../../assets/fonts/Quicksand-Regular.otf';

import AppComponent from './components/App/AppComponent';

import reducers from './reducers';

// setup global styles
injectGlobal`
  @font-face {
    font-family: 'QuickSand-Regular';
    src: url(${QuickSandRegular});
  }

  body {
    background: #fbf7f2;
    font-family: 'QuickSand-Regular', sans-serif;
  }
`;

// enable offline-first
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// create Redux store
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    { AppComponent() }
  </Provider>,
  document.getElementById('root')
);

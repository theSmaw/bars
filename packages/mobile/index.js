import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AppComponent from './src/components/App/AppComponent';

import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const Application = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
);

AppRegistry.registerComponent('mobile', () => Application);

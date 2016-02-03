import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.react';
import configureStore from './stores/ReduxStore';
import { Provider } from 'react-redux';
import WebAPIUtils from './utils/WebAPIUtils';

const store = configureStore();
console.log(store);
WebAPIUtils.initializeStreamOfTweets(store);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('react-application'));

export function getStore() {
  return store;
}

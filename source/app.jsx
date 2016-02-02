import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.react';
import configureStore from './stores/ReduxStore';
import { Provider } from 'react-redux';
import WebAPIUtils from './utils/WebAPIUtils';

let store = configureStore();

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('react-application'));

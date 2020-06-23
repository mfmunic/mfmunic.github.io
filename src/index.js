import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './sass/endex.css';

import MainPage from './components/MainPage';
import store from './store';

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root'),
);

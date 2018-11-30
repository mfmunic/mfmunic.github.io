import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './css/index.css';
import MainPage from './components/MainPage';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
    document.getElementById('root')
  );


// registerServiceWorker();
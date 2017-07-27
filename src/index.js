import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './configs/routes';
import store from './configs/store';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
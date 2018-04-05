import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const title = 'Multi-step Checkout Experience';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();

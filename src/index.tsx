import React from 'react';
import ReactDOM from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import axe from 'react-axe';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import { mockServer } from 'api/mocks/mockServer';

if (process.env.NODE_ENV !== 'production') {
  mockServer();
  whyDidYouRender(React);
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

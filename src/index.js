import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
require('./styles/app.scss');

render(<App />, document.getElementById('app'));

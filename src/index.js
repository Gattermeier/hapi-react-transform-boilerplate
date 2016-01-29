import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Router from 'react-router';
import routes from './routes';

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));

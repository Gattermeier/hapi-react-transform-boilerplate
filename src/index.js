import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import App from './App.js';
import routes from './routes';

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));

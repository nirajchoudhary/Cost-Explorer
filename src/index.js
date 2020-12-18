import "@babel/polyfill";
import React from 'react';
import {render} from 'react-dom';
import {AppRoute} from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


render (
    <React.StrictMode>
      <AppRoute />
    </React.StrictMode>,
    document.getElementById('root')
);

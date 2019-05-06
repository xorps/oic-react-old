import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Paperbase from './Paperbase';

ReactDOM.render(
  <BrowserRouter>
    <Paperbase />
  </BrowserRouter>
, document.getElementById('root'));
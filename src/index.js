import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Menu from './components/navbar/navbar'


// import App from './App';


ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/App'; // default import (export default ...)

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  //<React.StrictMode>
    
  //</React.StrictMode>,
  //<h1>Привет, мир!</h1>,
  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

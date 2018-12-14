
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import HelloWorld from './HelloWorld';
//import PropsValidation from './PropsValidation';
//import Events from './Events';
import Main from './Main';


//ReactDOM.render(<HelloWorld msg='Hello World React.js'/>, document.getElementById('root'));

//ReactDOM.render(<PropsValidation  height={1.85} />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

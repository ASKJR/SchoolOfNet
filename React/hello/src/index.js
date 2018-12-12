import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './HelloWorld';
import PropsValidation from './PropsValidation';
import Events from './Events';

//ReactDOM.render(<HelloWorld msg='Hello World React.js'/>, document.getElementById('root'));

//ReactDOM.render(<PropsValidation  height={1.85} />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Events />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

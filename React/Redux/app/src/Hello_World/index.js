import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloRedux from './HelloRedux';
import HelloReducer from './HelloReducer';
import { createStore } from 'redux';


const fnRender = () => {
    ReactDOM.render(
    <HelloRedux 
    msg={ store.getState() }
    sayHello={ () => store.dispatch({'type': 'SAY_HELLO'})}>

    </HelloRedux>, document.getElementById('root'))
    
}
const store = createStore(HelloReducer);
store.subscribe(fnRender);
fnRender();

//ReactDOM.render(<HelloRedux />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

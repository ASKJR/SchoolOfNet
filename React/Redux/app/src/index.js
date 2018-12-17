import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import cfgStore from './store';
import { Provider } from 'react-redux';

const store = cfgStore();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root')
)
serviceWorker.unregister();

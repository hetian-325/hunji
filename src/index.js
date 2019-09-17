import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import * as serviceWorker from './serviceWorker';

import {store} from './redux/store'

ReactDOM.render(<Home />,document.getElementById('root'));

store.subscribe(function(){
    ReactDOM.render(<Home />,document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

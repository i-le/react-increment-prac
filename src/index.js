import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {createStore} from 'redux';
import {counter} from './redux/reducers'

const store = createStore(counter)


ReactDOM.render(
    <App store={store} />,document.querySelector('#root')
)
store.subscribe(function() {
    ReactDOM.render(
        <App store={store} />,document.querySelector('#root')
    )
})
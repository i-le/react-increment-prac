import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import store from './redux/store';


ReactDOM.render(
    <App store={store} />,document.querySelector('#root')
)
store.subscribe(function() {
    ReactDOM.render(
        <App store={store} />,document.querySelector('#root')
    )
})
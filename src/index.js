import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './modules/reducer'
import {initialState} from './modules/reducer';
import 'normalize.css';
import './index.css';


const store = createStore(combineReducers({
    admin: reducer
}), 
(localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) 
: initialState);

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
})

console.log(localStorage);

ReactDOM.render(
<Provider store={store}>
    <AppRouter />
</Provider>,
document.getElementById('root'));
import { createStore } from 'redux'
import { combineReducers } from 'redux';
import { mainReducer } from './reducers/reducers'

let store = createStore(
    mainReducer,
    {location: "main"}
);

export default store;
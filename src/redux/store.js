import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'
import initialState from "./initialState";

const middlewares = [thunk];

export default createStore(rootReducer, 
    initialState, 
    applyMiddleware(...middlewares));

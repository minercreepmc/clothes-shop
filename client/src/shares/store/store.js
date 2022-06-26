import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const { rootReducer } = require('./root-reducer');

const composeEnhancer = composeWithDevTools || compose;

const middleWares = [thunk];
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

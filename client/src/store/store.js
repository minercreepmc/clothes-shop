import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const { rootReducer } = require('./root-reducer');

const composeEnhancer = composeWithDevTools || compose;
const composedEnhancers = composeEnhancer();

export const store = createStore(rootReducer, undefined, composedEnhancers);

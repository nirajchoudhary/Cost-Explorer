import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger'
import rootReducer from './../../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => (
    createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant(), logger)),
    )
);

/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };

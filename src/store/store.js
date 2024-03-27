import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
// import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
});

/* Old implementation before REDUX-TOOLKIT
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeToUse =
  (process
    .env
    .NODE_ENV !==
    'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeToUse(applyMiddleware(...middleWares));

export const persistor = persistStore(store); */

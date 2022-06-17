import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import LocalStorage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage: LocalStorage,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxImmutableStateInvariantMiddleware = reduxImmutableStateInvariant();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [reduxImmutableStateInvariantMiddleware, sagaMiddleware];
const enhancers = [];

if (middlewares.length > 0) {
  enhancers.push(applyMiddleware(...middlewares));
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;

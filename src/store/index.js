import { createStore, applyMiddleware } from "redux";
import { photosReducer } from "./photosReducer";
import createSagaMiddleware from 'redux-saga'
import {photosWatcher} from '../saga/photosSaga'
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(photosReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(photosWatcher)
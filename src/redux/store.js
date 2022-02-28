import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from 'redux-persist'
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";

const sagaMiddleware=createSagaMiddleware()

const middlewares=[sagaMiddleware]

if(process.env.Node_ENV==='developement'){
    middlewares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const persistor=persistStore(store)

export  {store,persistor};

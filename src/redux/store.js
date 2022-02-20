import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from 'redux-persist'
import rootReducer from "./rootReducer";

const middlewares=[]

if(process.env.Node_ENV==='developement'){
    middlewares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middlewares))

const persistor=persistStore(store)

export  {store,persistor};

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";

import { combineReducer } from "./reducers";
import history from "./history";

const middleWares = [routerMiddleware(history)];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  middleWares.push(logger);

const store = createStore(combineReducer, applyMiddleware(...middleWares));

export default store;

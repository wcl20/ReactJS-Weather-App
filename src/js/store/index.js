import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { asyncActionsMiddleware } from "../middlewares";
import rootReducer from "../reducers";

export default function configureStore(preloadedState) {
    const middlewares = [ asyncActionsMiddleware, thunk, logger ];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [ middlewareEnhancer ];
    const composedEnhancers = compose(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}

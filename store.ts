import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./state/store";
export const store=createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)
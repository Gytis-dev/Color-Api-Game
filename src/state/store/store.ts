import { createStore, applyMiddleware, compose } from "redux";
import { colorReducer } from "../reducers/reducers";
import thunk from "redux-thunk";

export const store = createStore(colorReducer, compose(applyMiddleware(thunk)));

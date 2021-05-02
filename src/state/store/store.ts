import { createStore, applyMiddleware, Store } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const store: Store = createStore(rootReducer, applyMiddleware(thunk));

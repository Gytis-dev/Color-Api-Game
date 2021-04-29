import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

// export const store: any = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//       (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export const store: any = createStore(rootReducer, applyMiddleware(thunk));

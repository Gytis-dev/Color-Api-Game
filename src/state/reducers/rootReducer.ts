import { combineReducers } from "redux";
import { dataReducer } from "../reducers/dataReducer";
import { userReducer } from "../reducers/userReducer";

export const rootReducer = combineReducers({
  dataReducer: dataReducer,
  userReducer: userReducer,
});

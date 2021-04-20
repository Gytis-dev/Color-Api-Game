import { SET_USER, SET_COLOR } from "../actions/actionTypes";

const initialState = {
  user: "",
  color: "#51c4d3",
};

interface Action {
  type: string;
  payload: string;
}

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

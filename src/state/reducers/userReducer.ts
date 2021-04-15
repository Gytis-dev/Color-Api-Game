import { SET_USER, SET_COLOR } from "../actions/actionTypes";

interface User<T> {
  [key: string]: T;
}

const userState: User<number | string | boolean | null> = {
  user: "",
  color: "",
};

interface Action {
  type: string;
  payload: string;
}

export const userReducer = (state = userState, action: Action) => {
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

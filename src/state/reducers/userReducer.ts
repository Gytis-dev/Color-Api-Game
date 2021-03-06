import { ATypes } from "../actions/actionTypes";
import { UserType } from "../../types/globalTypes";

interface Action {
  type: string;
  payload: {
    user: string;
    uuid: string;
    color: string;
    theme: boolean;
    coordinateX: number;
    coordinateY: number;
  };
}

const initialState: UserType = {
  user: null,
  uuid: null,
  color: "",
  theme: false,
  lineHistory: [],
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ATypes.SET_USER: {
      return {
        ...state,
        user: action.payload.user,
        uuid: action.payload.uuid,
      };
    }
    case ATypes.SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case ATypes.SET_THEME: {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    case ATypes.SET_LINE: {
      return {
        ...state,
        lineHistory: [
          ...state.lineHistory,
          action.payload.coordinateX,
          action.payload.coordinateY,
        ],
      };
    }
    case ATypes.GET_LINES: {
      return {
        ...state,
        lineHistory: action.payload,
      };
    }
    case ATypes.LOG_OUT: {
      return {
        user: null,
        uuid: null,
        color: "#51c4d3",
        theme: false,
        lineHistory: [],
      };
    }
    case ATypes.INITIAL_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

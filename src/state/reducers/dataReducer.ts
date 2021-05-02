import { ATypes } from "../actions/actionTypes";
import { DataInterface } from "../../types/globalTypes";

interface StateInterface {
  data: Array<unknown>;
  isLoading: boolean | null;
  error: string | null;
}

const initialState: StateInterface = {
  data: [],
  isLoading: false,
  error: null,
};

interface DataActionType {
  type: string;
  payload: DataInterface[] | string;
}

export const dataReducer = (state = initialState, action: DataActionType) => {
  switch (action.type) {
    case ATypes.FETCH_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case ATypes.FETCH_LOADING: {
      return { data: [], isLoading: true, error: null };
    }
    case ATypes.FETCH_ERROR: {
      return { data: [], isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

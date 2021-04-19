import {
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
} from "../actions/actionTypes";

interface StateInterface {
  data: Array<unknown>;
  loading: boolean | null;
  error: string | null;
}

const initialState: StateInterface = {
  data: [],
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    }
    case FETCH_LOADING: {
      return { data: [], loading: true, error: null };
    }
    case FETCH_ERROR: {
      return { data: [], loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

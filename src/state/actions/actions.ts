import {
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
} from "../actions/actionTypes";
import { params } from "../../consts/params";
import { handleGetApi } from "../../apis/config";

export const fetchSuccess = (data: Array<unknown>) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const FetchLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};

export const fetchError = (error: string | null) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const handleDataFetchThunk = () => (dispatch: any) => {
  dispatch(FetchLoading());
  handleGetApi("/board", params)
    .then((res) => dispatch(fetchSuccess(res)))
    .catch((e) => dispatch(fetchError(e)));
};

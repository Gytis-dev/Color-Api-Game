import {
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  SET_USER,
  SET_COLOR,
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
export const setUser = (user: string) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
export const setColor = (color: string | null) => {
  return {
    type: SET_COLOR,
    payload: color,
  };
};

export const handleDataFetchThunk = () => (dispatch: any) => {
  dispatch(FetchLoading());
  handleGetApi("/board", params)
    .then((res) => {
      dispatch(fetchSuccess(res));
    })
    .catch((e) => dispatch(fetchError(e)));
};

import { ATypes } from "../actions/actionTypes";
import { ApiRoutes, UserType } from "../../types/globalTypes";
import { params } from "../../consts/index";
import { handleGetApi } from "../../apis/config";

export const fetchSuccess = (data: Array<unknown>) => {
  return {
    type: ATypes.FETCH_SUCCESS,
    payload: data,
  };
};
export const FetchLoading = () => {
  return {
    type: ATypes.FETCH_LOADING,
  };
};
export const fetchError = (error: string | null) => {
  return {
    type: ATypes.FETCH_ERROR,
    payload: error,
  };
};
export const setUser = (user: UserType) => {
  return {
    type: ATypes.SET_USER,
    payload: user,
  };
};
export const setColor = (color: string | null) => {
  return {
    type: ATypes.SET_COLOR,
    payload: color,
  };
};
export const setTheme = () => {
  return {
    type: ATypes.SET_THEME,
  };
};
export const setLineHistory = (line: {
  coordinateX: number;
  coordinateY: number;
}) => {
  return { type: ATypes.SET_LINE, payload: line };
};

export const getLineHistory = (arr: any) => {
  return { type: ATypes.GET_LINES, payload: arr };
};
export const logout = () => {
  return { type: ATypes.LOG_OUT };
};

export const handleDataFetchThunk = () => (dispatch: any) => {
  dispatch(FetchLoading());
  handleGetApi(ApiRoutes.board, params)
    .then((res) => {
      dispatch(fetchSuccess(res));
    })
    .catch((e) => dispatch(fetchError(e)));
};

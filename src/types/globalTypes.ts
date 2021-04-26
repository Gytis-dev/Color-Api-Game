export interface DetailsInterface {
  details: {
    x: number;
    y: number;
    data: {
      name: string;
      color: string;
      createdAt: string;
    };
  };
}
export interface ElementInterface {
  x: number | string;
  y: number | string;
  color: string;
  name: string;
}
export interface UserState {
  userReducer: {
    user: string | null;
    uuid: string | null;
    color: string;
    theme: boolean;
    lineHistory: number[];
  };
}
export interface Data {
  dataReducer: {
    data: {
      _id: string;
      x: number;
      y: number;
      data: {
        name: string;
        color: string;
        data: any;
        createdAt: string;
      };
    }[];
    loading: boolean;
    error: string | null;
  };
}
export interface ItemData {
  _id: string;
  x: number;
  y: number;
  data: {
    name: string;
    color: string;
    data: any;
    createdAt: string;
  };
}
[];
export interface UserType {
  user: string | null;
  uuid: string | null;
  color?: string | null;
  theme?: false;
  lineHistory?: any;
}
export interface PostObject {
  x: number;
  y: number;
  name: string | null;
  color: string | null;
}
export enum ApiRoutes {
  board = "/board",
  status = "/status",
}
export interface UrlParams {
  x: number;
  y: number;
  w: number;
  h: number;
}

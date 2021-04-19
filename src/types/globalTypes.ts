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
    user: string;
    color: string;
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

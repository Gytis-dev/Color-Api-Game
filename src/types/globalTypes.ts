export interface ItemData {
  x: number | string;
  y: number | string;
  data: {
    color: string;
    name: string;
    createdAt: string;
  };
}
[];
export interface ContextInterface {
  currentUser: string | null;
  getUserName: (name: string) => void;
  fetchError: string | null;
  data: Array<unknown> | null;
  color: string | null;
  changeUserColor: (color: string) => void;
}

export interface DetailsInterface {
  details: {
    x: number | string;
    y: number | string;
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

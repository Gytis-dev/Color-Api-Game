export interface ItemData {
  x: number;
  y: number;
  data: {
    color: string;
    name: string;
    createdAt: string;
  };
}
[];

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

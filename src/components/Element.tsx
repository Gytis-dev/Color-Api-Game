import { DetailsInterface } from "../types/globalTypes";
import { Circle } from "react-konva";

export interface Props {
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

export const Element = ({ details }: DetailsInterface): JSX.Element => {
  const { x, y } = details;
  const { name, color } = details.data;

  return <Circle radius={4} fill={color} x={x} y={y} name={name} />;
};

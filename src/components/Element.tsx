import { DetailsInterface } from "../types/globalTypes";
import { Circle } from "react-konva";

export const Element = ({ details }: DetailsInterface): JSX.Element => {
  const { x, y } = details;
  const { name, color } = details.data;

  return <Circle radius={7} fill={color} x={x} y={y} name={name} />;
};

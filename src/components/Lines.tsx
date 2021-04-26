import { Line } from "react-konva";

export const Lines = ({
  linePoints,
  color,
}: {
  linePoints: number[];
  color: string;
}): JSX.Element => {
  return <Line stroke={color} points={linePoints} strokeWidth={4} />;
};

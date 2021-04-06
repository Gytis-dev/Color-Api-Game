import styled from "styled-components";
import { DetailsInterface, ElementInterface } from "../types/globalTypes";

export const Element = ({ details }: DetailsInterface): JSX.Element => {
  const { x, y } = details;
  const { name, color } = details.data;

  return <DivElement x={x} y={y} color={color} name={name}></DivElement>;
};

const DivElement = styled.div<ElementInterface>`
  background: ${(props) => props.color};
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 10px;
  left: ${(props) => props.x + "px"};
  top: ${(props) => props.y + "px"};
`;

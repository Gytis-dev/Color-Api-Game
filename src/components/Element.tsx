import styled from "styled-components";
import { DetailsInterface, ElementInterface } from "../types/globalTypes";

export const Element = ({ details }: DetailsInterface): JSX.Element => {
  const { x, y } = details;
  const { name, color, createdAt } = details.data;

  return (
    <DivElement
      x={x}
      y={y}
      color={color}
      name={name}
      createdAt={createdAt}
    ></DivElement>
  );
};

const DivElement = styled.div<ElementInterface>`
  background: ${(props) => props.color};
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 10px;
  left: ${(props) => props.x + "px"};
  top: ${(props) => props.y + "px"};
  &:hover:after {
    content: "name: ${(props) => props.name}";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

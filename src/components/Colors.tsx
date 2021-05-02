import styled from "styled-components";

interface ChildrenInterface {
  color: string;
  changeColor: (colorName: string) => void;
}

export const Colors = ({
  color,
  changeColor,
}: ChildrenInterface): JSX.Element => {
  const handleColor = (e: React.MouseEvent<HTMLDivElement>) => {
    const attribute = e.currentTarget.getAttribute("color");
    attribute && changeColor(attribute);
  };

  return (
    <CurrentColor color={color} onClick={handleColor}>
      {color}
    </CurrentColor>
  );
};

const CurrentColor = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border: 2px solid white;
  text-align: center;
  border-radius: 3px;
  padding: 5px 0px;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 2px solid grey;
  }
`;

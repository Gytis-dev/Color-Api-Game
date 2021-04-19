import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { colorName, username, initialColors } from "../consts/params";
import { setUser, setColor } from "../state/actions/actions";
import { UserState } from "../types/globalTypes";
import { useDispatch, useSelector } from "react-redux";

export const MenuBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const { user, color } = useSelector((state: UserState) => state.userReducer);

  const handleColorChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const attribute = e.currentTarget.getAttribute("color");
    dispatch(setColor(attribute));
    if (attribute != null) sessionStorage.setItem("color", attribute);
  };

  useEffect(() => {
    if (username != null && colorName != null && user.length === 0) {
      dispatch(setUser(username));
      dispatch(setColor(colorName));
    }
  }, []);

  return (
    <MenuWrap status={toggle}>
      <Toggler status={toggle} onClick={() => setToggle(!toggle)}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Toggler>
      <Content status={toggle}>
        <Section>
          <Title>Menu</Title>
        </Section>
        <Section>
          <Logo>{user && user[0].toUpperCase()}</Logo>
          <Email>{user}</Email>
        </Section>
        <Section>
          <CurrentColor>
            <Name>Current color</Name>
            <Color color={color ? color : "#51c4d3"}>
              {color ? color : "#51c4d3"}
            </Color>
          </CurrentColor>
        </Section>
        <Section>
          <ColorSelection>
            <Select
              color={initialColors[0]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[1]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[2]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[3]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[4]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[5]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[6]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[7]}
              onClick={handleColorChange}
            ></Select>
            <Select
              color={initialColors[8]}
              onClick={handleColorChange}
            ></Select>
          </ColorSelection>
        </Section>
      </Content>
    </MenuWrap>
  );
};

interface ToggleStatus {
  status: boolean;
}
const MenuWrap = styled.div<ToggleStatus>`
  position: absolute;
  z-index: 1;
  width: ${({ status }) => (status ? "250px" : "-250px")};
  height: 100vh;
  background: ${(props) => props.theme.color.primary};
`;
const Content = styled.div<ToggleStatus>`
  display: ${({ status }) => (status ? "intial" : "none")};
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Toggler = styled.div<ToggleStatus>`
  background: ${(props) => props.theme.color.primary};
  text-align: right;
  height: 40px;
  padding: 6px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.3s ease-in-out;
  width: 60px;
  left: ${({ status }) => (status ? "250px" : "0px")};
  border-radius: ${(props) => (props.status ? "0px" : "5px")};
  margin: ${({ status }) => (status ? "0px" : "10px")};
  cursor: pointer;
  &:hover > div {
    background: lightgrey;
    transition: 0.2s;
  }
`;
const Line = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 5px;
  background: white;
`;
const Title = styled.div`
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.big};
  color: ${(props) => props.theme.color.secondary};
`;
const Logo = styled.div`
  align-self: center;
  background: ${(props) => props.theme.color.secondary};
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`;
const Email = styled.div`
  align-self: center;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.min};
  color: white;
`;
const CurrentColor = styled.div`
  font-size: ${(props) => props.theme.fontSize.min};
  color: black;
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
`;
const Name = styled.div``;
const Color = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  padding: 0px 15px;
  color: white;
  border-radius: 3px;
`;
const ColorSelection = styled.div`
  background: ${(props) => props.theme.color.secondary};
  margin: 10px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.min};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;
const Select = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border: 2px solid white;
  text-align: center;
  padding: 15px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 2px solid grey;
  }
`;

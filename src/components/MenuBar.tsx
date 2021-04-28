import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { colorName, username, initialColors } from "../consts/index";
import { setColor, setTheme, logout } from "../state/actions/actions";
import { UserState } from "../types/globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { auth, Database } from "../config/firebase";
import {
  ToggleStatus,
  ThemeText,
  Line,
  Title,
  Logo,
  Email,
  Section,
  LogoutWrap,
  LogoutButton,
  Name,
} from "../styles/menuBarStyle";

export const MenuBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const { user, color, uuid, theme } = useSelector(
    (state: UserState) => state.userReducer
  );

  const [themeToggler, setThemeToggler] = useState(false);

  const handleColorChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const attribute = e.currentTarget.getAttribute("color");
    dispatch(setColor(attribute));
    if (attribute != null) sessionStorage.setItem("color", attribute);
  };

  const handleLogOut = () => {
    auth.signOut().then(() => {
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("lineHistory");
      sessionStorage.removeItem("color");
      dispatch(logout());
      history.push("/");
    });
  };

  const handleThemeChange = () => {
    setThemeToggler(!themeToggler);
    if (uuid) {
      try {
        Database.getUserDocument(uuid).then((doc) => {
          if (doc.exists) {
            Database.database
              .doc(uuid)
              .update({ darkTheme: !doc.data()?.darkTheme });
            dispatch(setTheme());
          } else {
            console.log("Document not found");
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (username != null && colorName != null && user === null) {
      dispatch(setColor(colorName));
    }
  }, []);

  return (
    <MenuWrap status={toggle} userTheme={theme}>
      <Toggler
        status={toggle}
        userTheme={theme}
        onClick={() => setToggle(!toggle)}
      >
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Toggler>
      <Content status={toggle}>
        <Section>
          <Title>Menu</Title>
        </Section>
        <Section>
          <Logo>{user ? user[0].toUpperCase() : "Loading.."}</Logo>
          <Email>{user && user}</Email>
        </Section>
        <Section>
          <CurrentColor toggler={themeToggler}>
            <Name>Current color</Name>
            <Color color={color ? color : "#51c4d3"}>
              {color ? color : "#51c4d3"}
            </Color>
          </CurrentColor>
        </Section>
        <Section>
          <ColorSelection toggler={themeToggler}>
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

          <ThemeWrapper toggler={themeToggler}>
            <ThemeText>{themeToggler ? "Dark mode" : "Light mode"}</ThemeText>
            <ThemeToggler toggler={themeToggler}>
              <Btn onClick={handleThemeChange} toggler={themeToggler}></Btn>
            </ThemeToggler>
          </ThemeWrapper>
        </Section>

        <LogoutWrap>
          <LogoutButton onClick={handleLogOut}>Log out</LogoutButton>
        </LogoutWrap>
      </Content>
    </MenuWrap>
  );
};

const ThemeToggler = styled.div<{ toggler: boolean }>`
  background: ${(props) => (props.toggler ? "lightgreen" : "lightgrey")};
  width: 70px;
  height: 27px;
  border-radius: 15px;
  margin: 10px auto;
  display: flex;
  align-items: center;
`;
const Btn = styled.div<{ toggler: boolean }>`
  width: 27px;
  background: white;
  border-radius: 15px;
  cursor: pointer;
  height: 92%;
  transform: ${({ toggler }) =>
    toggler ? "translateX(41px)" : "translateX(2px)"};
  transition: 0.5s ease-in-out;
`;
const ThemeWrapper = styled.div<{ toggler: boolean }>`
  background: ${(props) =>
    props.toggler ? "black" : props.theme.color.secondary};
  display: flex;
  justify-content: space-around;
  margin: 10px;
  color: ${(props) => (props.toggler ? "white" : "black")};
  font-size: ${(props) => props.theme.fontSize.min};
  padding: 5px 20px;
  transition: 0.5s ease-in-out;
  align-items: center;
`;
const MenuWrap = styled.div<ToggleStatus>`
  position: absolute;
  z-index: 1;
  width: ${({ status }) => (status ? "250px" : "-250px")};
  height: 100vh;
  transition: 0.5s ease-in-out;
  background: ${(props) =>
    props.userTheme ? "black" : props.theme.color.primary};
`;
const Content = styled.div<ToggleStatus>`
  display: ${({ status }) => (status ? "intial" : "none")};
`;
const Toggler = styled.div<ToggleStatus>`
  background: ${(props) =>
    props.userTheme ? "black" : props.theme.color.primary};
  text-align: right;
  height: 40px;
  transition: 0.3s;
  padding: 6px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s ease-in-out;
  width: 60px;
  left: ${({ status }) => (status ? "250px" : "0px")};
  border-radius: ${(props) => (props.status ? "0px" : "5px")};
  margin: ${({ status }) => (status ? "0px" : "10px")};
  cursor: pointer;
  &:hover > div {
    background: lightgrey;
    transition: 0.1s;
  }
`;
const CurrentColor = styled.div<{ toggler: boolean }>`
  font-size: ${(props) => props.theme.fontSize.min};
  color: ${(props) => (props.toggler ? "white" : "black")};
  background: ${(props) =>
    props.toggler ? "black" : props.theme.color.secondary};
  padding: 15px;
  margin: 10px;
  display: flex;
  transition: 0.5s ease-in-out;
  justify-content: space-around;
`;
const Color = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  padding: 0px 15px;
  color: white;
  border-radius: 3px;
`;
const ColorSelection = styled.div<{ toggler: boolean }>`
  background: ${(props) =>
    props.toggler ? "black" : props.theme.color.secondary};
  margin: 10px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.min};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  transition: 0.5s ease-in-out;
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

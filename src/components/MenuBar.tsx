import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Colors } from "../components/index";
import { initialColors } from "../consts/index";
import {
  setColor,
  setTheme,
  logout,
  setInitialTheme,
} from "../state/actions/actions";
import { UserState } from "../types/globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { auth, Database } from "../config/firebase";
import {
  ThemeText,
  Line,
  Title,
  Logo,
  Email,
  Section,
  LogoutWrap,
  LogoutButton,
  Name,
  MenuWrap,
  Toggler,
  Content,
  CurrentColor,
  Color,
  ColorSelection,
  ThemeWrapper,
  ThemeToggler,
  Btn,
} from "../styles/menuBarStyle";

export const MenuBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const [themeToggler, setThemeToggler] = useState(false);

  const { user, color, uuid, theme } = useSelector(
    (state: UserState) => state.userReducer
  );

  const handleColorChange = (colorName: string) => {
    if (uuid) {
      try {
        Database.getUserDocument(uuid).then((doc) => {
          if (doc.exists) {
            Database.database.doc(uuid).update({ color: colorName });
            dispatch(setColor(colorName));
          } else {
            console.log("Document not found");
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleLogOut = () => {
    auth.signOut().then(() => {
      sessionStorage.removeItem("currentUser");
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
    if (uuid) {
      try {
        Database.getUserDocument(uuid).then((doc) => {
          if (doc.exists) {
            const userColor = doc.data()?.color;
            const theme = doc.data()?.darkTheme;
            dispatch(setColor(userColor));
            dispatch(setInitialTheme(theme));
            setThemeToggler(theme);
          } else {
            console.log("Document not found");
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [uuid]);

  return (
    <MenuWrap status={toggle} userTheme={themeToggler}>
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
            {initialColors.map((item: string) => (
              <Colors
                key={item}
                color={item}
                changeColor={(colorName) => handleColorChange(colorName)}
              />
            ))}
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

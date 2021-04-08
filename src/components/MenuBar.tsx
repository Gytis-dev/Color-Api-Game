import { AppContext } from "../context/Context";
import { useContext, useState } from "react";
import { randomColorGenerator } from "../consts/params";
import {
  Random,
  UserWrap,
  User,
  Color,
  ColorCode,
  MenuWrap,
  Title,
  HeaderWrap,
} from "../styles/menuBarStyle";

export const MenuBar = (): JSX.Element => {
  const context = useContext(AppContext);
  const user = context?.currentUser;
  const color = context?.color;
  const [button, setButton] = useState(false);

  return (
    <MenuWrap>
      <HeaderWrap>
        <Title>Navigation</Title>
      </HeaderWrap>
      <UserWrap>
        <User>User: {user}</User>
        <Color>
          Color: <ColorCode selectedColor={color}></ColorCode>
          <Random
            onClick={() => context?.changeUserColor(randomColorGenerator())}
          >
            Pick random color!
          </Random>
        </Color>
      </UserWrap>
    </MenuWrap>
  );
};

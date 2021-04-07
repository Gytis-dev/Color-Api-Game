import { AppContext } from "../context/Context";
import { useContext } from "react";
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
  const scale = context?.scale;

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
      <UserWrap>
        <input
          onChange={(e) => context?.changeScale(parseInt(e.target.value))}
          type="range"
          min="1"
          max="10"
          value={scale}
          step="1"
        />
      </UserWrap>
    </MenuWrap>
  );
};

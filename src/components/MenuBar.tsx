import { AppContext } from "../context/Context";
import styled from "styled-components";
import { useContext, useState } from "react";
import { Color, ColorCode } from "../styles/menuBarStyle";

export const MenuBar = (): JSX.Element => {
  const context = useContext(AppContext);
  const user = context?.currentUser;
  const color = context?.color;
  const scale = context?.scale;

  const [toggle, setToggle] = useState(true);

  return (
    <MenuBarWrap toggle={toggle}>
      <Head>
        <Toggler onClick={() => setToggle(!toggle)}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Toggler>
      </Head>

      <UserWrapper>
        <CurrentUser>
          <Span>Painter: </Span>
          {user}
        </CurrentUser>
      </UserWrapper>

      <ZoomWrap>
        <ZoomLabel>Zoom in!</ZoomLabel>
        <input
          onChange={(e) => context?.changeScale(parseInt(e.target.value))}
          type="range"
          min="1"
          max="10"
          value={scale}
          step="1"
        />
      </ZoomWrap>

      <Color>
        <ColorCode selectedColor={color}>{color}</ColorCode>
      </Color>
    </MenuBarWrap>
  );
};

const MenuBarWrap = styled.div<{ toggle: boolean }>`
  background: ${(props) => props.theme.color.primary};
  width: ${(props) => (props.toggle ? "70px" : "225px")};
  height: ${(props) => (props.toggle ? "60px" : "400px")};
  position: absolute;
  z-index: 10;
  overflow: hidden;
  transition: 0.2s ease-in;
  border-radius: 0px 0px 10px 0px;

  @media screen and (max-width: 400px) {
    position: fixed;
    width: ${(props) => (props.toggle ? "100vw" : "70px")};
    height: ${(props) => (props.toggle ? "auto" : "60px")};
    z-index: 1;
    transition: 0.2s;
  }
`;
const Head = styled.div`
  height: 40px;
  margin: 8px;
`;

const Toggler = styled.div`
  padding: 6px;
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Line = styled.div`
  width: 50px;
  border-radius: 2px;
  height: 5px;
  background: ${(props) => props.theme.color.secondary};
`;
const UserWrapper = styled.div`
  background: ${(props) => props.theme.color.secondary};
  padding: 10px;
  margin: 12px auto;
  border-radius: 10px;
  width: 75%;
`;
const CurrentUser = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
`;
const Span = styled.small`
  font-weight: 600;
`;

const ZoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;
`;
const ZoomLabel = styled.div`
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 1px;
`;

import styled from "styled-components";

export const Random = styled.small`
  margin-left: 5px;
  color: ${(props) => props.theme.color.fourth};
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
export const UserWrap = styled.div`
  padding: 15px;
`;
export const User = styled.div`
  margin: 5px;
  font-size: ${(props) => props.theme.fontSize.min};
  color: black;
  background: ${(props) => props.theme.color.fifth};
  padding: 7px;
  font-weight: 600;
  border-radius: 10px;
  width: 100%;
`;
export const Color = styled.div`
  background: transparent;
  font-size: ${(props) => props.theme.fontSize.min};
  height: 40px;
  margin-top: 10px;
  color: black;
  font-weight: 600;
  width: 100%;
  padding-bottom: 20px;
`;
export const ColorCode = styled.div<{
  selectedColor: string | null | undefined;
}>`
  background: ${(props) => props.selectedColor};
  width: 50%;
  margin: 0 auto;
  border-radius: 20px;
  height: 100%;
  display: flex;
  color: white;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
`;
export const MenuWrap = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  width: 215px;
  position: absolute;
  z-index: 1;
  height: 100vh;
`;
export const Title = styled.div`
  flex: 2;
  font-weight: 600;
  text-align: left;
  padding-top: 15px;
  color: white;
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSize.big};
`;
export const HeaderWrap = styled.div`
  display: flex;
`;

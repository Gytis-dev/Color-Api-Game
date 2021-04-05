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
  color: white;
`;
export const Color = styled.div`
  display: inline-flex;
  margin: 5px;
  font-size: ${(props) => props.theme.fontSize.min};
`;
export const ColorCode = styled.div<{
  selectedColor: string | null | undefined;
}>`
  background: ${(props) => props.selectedColor};
  width: 15px;
  height: 15px;
  display: inline-flex;
  margin-left: 3px;
  border-radius: 20px;
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
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  color: lightgrey;
  font-size: ${(props) => props.theme.fontSize.mid};
`;
export const HeaderWrap = styled.div`
  display: flex;
`;

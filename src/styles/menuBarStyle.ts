import styled from "styled-components";

export interface ToggleStatus {
  status: boolean;
  userTheme?: boolean;
}
export const ThemeText = styled.div``;

export const Line = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 5px;
  background: white;
`;
export const Title = styled.div`
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.big};
  color: ${(props) => props.theme.color.secondary};
`;
export const Logo = styled.div`
  align-self: center;
  background: ${(props) => props.theme.color.secondary};
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`;
export const Email = styled.div`
  align-self: center;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.min};
  color: white;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const LogoutWrap = styled.div`
  padding: 10px;
  text-align: center;
`;

export const LogoutButton = styled.button`
  padding: 5px 25px;
  border: 1px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.secondary};
    color: black;
  }
`;
export const Name = styled.div``;

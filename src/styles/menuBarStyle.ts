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

export const ThemeToggler = styled.div<{ toggler: boolean }>`
  background: ${(props) => (props.toggler ? "lightgreen" : "lightgrey")};
  width: 70px;
  height: 27px;
  border-radius: 15px;
  margin: 10px auto;
  display: flex;
  align-items: center;
`;
export const Btn = styled.div<{ toggler: boolean }>`
  width: 27px;
  background: white;
  border-radius: 15px;
  cursor: pointer;
  height: 92%;
  transform: ${({ toggler }) =>
    toggler ? "translateX(41px)" : "translateX(2px)"};
  transition: 0.5s ease-in-out;
`;
export const ThemeWrapper = styled.div<{ toggler: boolean }>`
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
export const MenuWrap = styled.div<ToggleStatus>`
  position: absolute;
  z-index: 1;
  width: ${({ status }) => (status ? "250px" : "-250px")};
  height: 100vh;
  border-right: ${(props) => (props.theme.theme ? "2px solid white" : "none")};
  transition: 0.5s ease-in-out;
  background: ${(props) =>
    props.userTheme ? "black" : props.theme.color.primary};
`;
export const Content = styled.div<ToggleStatus>`
  display: ${({ status }) => (status ? "intial" : "none")};
`;
export const Toggler = styled.div<ToggleStatus>`
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
export const CurrentColor = styled.div<{ toggler: boolean }>`
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
export const Color = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  padding: 0px 15px;
  color: white;
  border-radius: 3px;
`;
export const ColorSelection = styled.div<{ toggler: boolean }>`
  background: ${(props) =>
    props.toggler ? "black" : props.theme.color.secondary};
  margin: 10px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.min};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  transition: 0.5s ease-in-out;
`;

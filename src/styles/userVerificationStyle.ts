import { mobileBreakPoint } from "../consts/breakpoints";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form``;
export const FormContainer = styled.div`
  width: 800px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.48);

  @media (${mobileBreakPoint}) {
    flex-direction: column;
    box-shadow: none;
    width: 100%;
    transform: none;
    top: 7%;
    left: 0%;
  }
`;
export const LeftContainer = styled.div`
  background: linear-gradient(90deg, #614385, #516395);
  border-radius: 3px 0px 0px 3px;
  flex: 1;

  @media (${mobileBreakPoint}) {
    border-radius: 0px;
    margin: 20px;
  }
`;
export const RightContainer = styled.div`
  flex: 1;
  align-self: center;
  @media (${mobileBreakPoint}) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const FormControl = styled.div`
  margin: 10px;
  text-align: center;

  @media (${mobileBreakPoint}) {
  }
`;
export const Input = styled.input`
  width: 75%;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  background: transparent;
`;
export const Logo = styled.h3`
  color: white;
  margin: 15px;
  display: inline-flex;
  }
`;
export const SignUpTitle = styled.h1`
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-shadow: 1px 1px lightgrey;
`;

export const About = styled.h2`
  margin-top: 40px;
  color: white;
  padding-left: 15px;
  padding-top: 15px;
  padding-right: 15px;
  @media (${mobileBreakPoint}) {
    margin-top: 0px;
  }
`;

export const MoreInformation = styled.div`
  color: white;
  padding: 15px;
  text-align: left;
`;

export const Btn = styled.input`
  padding: 5px 25px;
  margin-top: 10px;
  background: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid grey;
  &:hover {
    background: #516395;
    color: white;
    border: 1px solid white;
  }
`;
export const CreateAccount = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.min};
`;
export const MainWrap = styled.div`
  padding: 15px;
`;
export const Back = styled(Link)`
  padding: 10px;
`;

export const Error = styled.small`
  font-size: ${(props) => props.theme.fontSize.min};
  color: ${(props) => props.theme.color.third};
`;

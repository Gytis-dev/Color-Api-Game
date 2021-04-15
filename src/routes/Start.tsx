import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setUser } from "../state/actions/actions";
import { useDispatch } from "react-redux";

export const Start = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState<string>("");
  const [color, setColor] = useState<string | null>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.currentTarget.children[2]
      .children[0] as HTMLInputElement).value;
    if (username.length != 0 && color?.length != 0) {
      localStorage.setItem("currentUser", username);
      if (color != null) localStorage.setItem("color", color);
      dispatch(setUser(username));
      setError("");
      history.push("/dashboard");
    } else setError("Make sure you enter username and / or color");
  };

  const handleColorChange = (e: React.FormEvent) => {
    setColor(e.currentTarget.getAttribute("color"));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <ErrorMessage error={error}>{error}</ErrorMessage>
      <FormElement>
        <Head size={"mid"}>Get started</Head>
      </FormElement>
      <FormElement>
        <Input type="text" placeholder="Enter your username..." />
      </FormElement>
      <ColorWrapper>
        <Head size={"min"}>Pick initial color</Head>
        <Color>
          <Span color={"#5b8a72"} onClick={handleColorChange}></Span>
          <Span color={"#e84545"} onClick={handleColorChange}></Span>
          <Span color={"#fed049"} onClick={handleColorChange}></Span>
          <Span color={"#8ac4d0"} onClick={handleColorChange}></Span>
          <Span color={"#f14668"} onClick={handleColorChange}></Span>
        </Color>
      </ColorWrapper>
      <FormElement>
        <input type="submit" value="Start" />
      </FormElement>
    </Wrapper>
  );
};

const ErrorMessage = styled.div<{ error: string }>`
  text-align: center;
  background: ${(props) =>
    props.error ? props.theme.color.secondary : props.theme.color.primary};
  };
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s;
`;
const Wrapper = styled.form`
  position: absolute;
  width: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: ${(props) => props.theme.color.primary};
  box-shadow: 10px 10px 27px -9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 27px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px -9px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
const FormElement = styled.div`
  max-width: 75%;
  margin: 10px auto;
  height: 30px;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  color: white;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
  &::placeholder {
    color: white;
  }
`;
const Head = styled.div<{ size: string | null }>`
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] : "initial"};
`;
const ColorWrapper = styled.div`
  margin: 5px auto;
  text-align: center;
  padding: 10px;
  color: black;
  width: 75%;
`;
const Color = styled.div`
  margin: 10px;
  display: flex;
  height: 20px;
  justify-content: center;
`;
const Span = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 25px;
  height: 100%;
  margin: 3px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;

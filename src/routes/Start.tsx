import {
  Wrapper,
  FormElement,
  Input,
  Head,
  ColorWrapper,
  Color,
  Span,
  Button,
} from "../styles/globalStyle";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import { useHistory } from "react-router-dom";

export const Start = (): JSX.Element => {
  const context = useContext(AppContext);
  const [name, setName] = useState("");
  const [color, setColor] = useState<any>("");
  const history = useHistory();

  const handleClick = () => {
    context?.getUserName(name);
    context?.changeUserColor(color);
    setName("");
    history.push("/dashboard");
  };

  const handleColorChange = (e: React.MouseEvent<HTMLElement>) => {
    setColor(e.currentTarget.getAttribute("color"));
  };

  return (
    <Wrapper>
      <FormElement>
        <Head size={"mid"}>Get started</Head>
      </FormElement>
      <FormElement>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
        />
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
        <Button onClick={handleClick}>Start</Button>
      </FormElement>
    </Wrapper>
  );
};

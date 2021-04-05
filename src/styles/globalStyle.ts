import styled from "styled-components";

export const theme = {
  color: {
    primary: "#313a46",
    secondary: "#fafbfe",
    third: "#727cf5",
    fourth: "#0acf97",
  },
  fontSize: {
    min: "12px",
    mid: "16px",
    max: "20px",
    big: "25px",
  },
};

export const Wrapper = styled.div`
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
export const FormElement = styled.div`
  max-width: 75%;
  margin: 10px auto;
  height: 30px;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  color: white;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
`;
export const Button = styled.button<{ primary?: boolean | null }>`
  width: 75%;
  height: 100%;
  background: ${(props) =>
    props.primary ? props.theme.color.primary : props.theme.color.secondary};
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.primary};
    color: white;
    border: 1px solid white;
  }
`;
export const Head = styled.div<{ size: string | null }>`
  color: white;
  font-weight: bold;
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] : "initial"};
`;
export const Text = styled.p`
  color: white;
  padding: 10px;
`;

export const ColorWrapper = styled.div`
  margin: 5px;
  text-align: center;
`;
export const Color = styled.div`
  margin: 10px;
  display: flex;
  height: 20px;
  justify-content: center;
`;

export const Span = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 25px;
  height: 100%;
  margin: 3px;
  border-radius: 5px;
  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;

import React, { FormEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faKey } from "@fortawesome/free-solid-svg-icons";
import { checkEmailValidity } from "../consts/functions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/actions/actions";
import {
  Form,
  FormContainer,
  LeftContainer,
  Logo,
  About,
  MoreInformation,
  RightContainer,
  FormControl,
  Input,
  SignUpTitle,
  Error,
  CreateAccount,
  Btn,
} from "../styles/userVerificationStyle";

export const Login = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (
      checkEmailValidity(email) &&
      email != undefined &&
      password != undefined &&
      password.length != 0
    ) {
      setError("");
      dispatch(setUser(email));
      sessionStorage.setItem("currentUser", email);
      sessionStorage.setItem("color", "#51c4d3");
      history.push("/dashboard");
    } else setError("Username or password is incorrect");
  };

  return (
    <FormContainer>
      <LeftContainer>
        <Logo>Colors.</Logo>
        <About>Get started</About>
        <MoreInformation>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          accusantium!
        </MoreInformation>
      </LeftContainer>
      <RightContainer>
        <FormControl>
          <Error>{error}</Error>
        </FormControl>
        <SignUpTitle>Log in</SignUpTitle>
        <Form onSubmit={handleFormSubmit}>
          <FormControl>
            <FontAwesomeIcon icon={faFile} />
            <Input type="email" placeholder="Email..." ref={emailRef} />
          </FormControl>
          <FormControl>
            <FontAwesomeIcon icon={faKey} />
            <Input
              type="password"
              placeholder="Password..."
              ref={passwordRef}
            />
          </FormControl>

          <FormControl>
            <Btn type="submit" value="Log in" />
          </FormControl>
        </Form>
        <FormControl>
          <CreateAccount to="/signup">
            Do not have an account? Create one now
          </CreateAccount>
        </FormControl>
      </RightContainer>
    </FormContainer>
  );
};

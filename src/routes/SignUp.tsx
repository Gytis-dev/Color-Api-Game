import React, { FormEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  FormContainer,
  LeftContainer,
  Logo,
  About,
  MoreInformation,
  Back,
  RightContainer,
  FormControl,
  Input,
  MainWrap,
  SignUpTitle,
  Btn,
} from "../styles/userVerificationStyle";

export const SignUp = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const email = emailRef.current?.value;
    // const password = passwordRef.current?.value;
    // const repeatPassword = repeatPasswordRef.current?.value;
  };

  return (
    <MainWrap>
      <Back to="/">Back</Back>
      <FormContainer>
        <LeftContainer>
          <Logo>Colors.</Logo>
          <About>Get exclusive access to our product</About>
          <MoreInformation>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore
            quia ipsa totam voluptate possimus non atque architecto, ducimus
            cumque?
          </MoreInformation>
        </LeftContainer>
        <RightContainer>
          <SignUpTitle>Sign Up</SignUpTitle>
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
              <FontAwesomeIcon icon={faKey} />
              <Input
                type="password"
                placeholder="Repeat password"
                ref={repeatPasswordRef}
              />
            </FormControl>
            <FormControl>
              <Btn type="submit" value="Create User" />
            </FormControl>
          </Form>
        </RightContainer>
      </FormContainer>
    </MainWrap>
  );
};

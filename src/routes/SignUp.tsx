import React, { FormEvent, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faKey } from "@fortawesome/free-solid-svg-icons";
import { auth, Database } from "../config/firebase";
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
  Error,
  Input,
  MainWrap,
  SignUpTitle,
  Btn,
} from "../styles/userVerificationStyle";

export const SignUp = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const repeatPassword = repeatPasswordRef.current?.value;

    if (
      email != undefined &&
      password != undefined &&
      repeatPassword != undefined
    ) {
      if (
        email.length != 0 &&
        password === repeatPassword &&
        password.length > 6 &&
        repeatPassword.length > 6
      ) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            const uuid = res.user?.uid;
            if (uuid) Database.createUserDocument(uuid);
            history.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        setError(
          "Please check your email or password (password should cointaint at least 6 characters)"
        );
      }
    }
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
          <FormControl>
            <Error>{error}</Error>
          </FormControl>
          <SignUpTitle>Sign Up</SignUpTitle>
          <Form onSubmit={handleFormSubmit}>
            <FormControl>
              <FontAwesomeIcon icon={faFile} />
              <Input
                type="email"
                placeholder="Email..."
                ref={emailRef}
                required
              />
            </FormControl>
            <FormControl>
              <FontAwesomeIcon icon={faKey} />
              <Input
                type="password"
                placeholder="Password..."
                ref={passwordRef}
                required
                name="email"
              />
            </FormControl>
            <FormControl>
              <FontAwesomeIcon icon={faKey} />
              <Input
                type="password"
                placeholder="Repeat password..."
                ref={repeatPasswordRef}
                required
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

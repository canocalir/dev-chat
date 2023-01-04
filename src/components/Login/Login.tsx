import { LoginInnerContainer, LoginOuterContainer } from "./Login.styled";

import imageLogo from "../../assets/mainlogo.jpg";
import { Button } from "@material-ui/core";
import { FC, SyntheticEvent } from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login:FC = () => {
  const googleSignInHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <LoginOuterContainer>
      <LoginInnerContainer>
        <img src={imageLogo} alt="" />
        <h1>Sign in to the Dev Chat</h1>
        <Button onClick={googleSignInHandler}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginOuterContainer>
  );
};

export default Login;

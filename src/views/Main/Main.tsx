import { FC } from "react";
import imageLogo from "../../assets/mainlogo.jpg";
import { MainViewContainer, MainViewInner } from "./Main.styled";

const Main: FC = () => {
  return (
    <MainViewContainer>
      <MainViewInner>
        <img src={imageLogo} alt="logo" />
        <h1>Welcome to DEVChat</h1>
        <p>Enter to a channel or create one</p>
      </MainViewInner>
    </MainViewContainer>
  );
};

export default Main;



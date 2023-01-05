import styled from "styled-components";

const LoginOuterContainer = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.bgColorMain};
`;

const LoginInnerContainer = styled.div`
  margin: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 0.7rem;
  box-shadow: ${props => props.theme.loginBoxShadow};
  img {
    object-fit: contain;
    width: 12rem;
    margin-bottom: 3rem;
  }
  button {
    background-color: ${props => props.theme.mainDarkColor} !important;
    color: #ffffff;
    margin-top: 1rem;
  }
`;

export { LoginOuterContainer, LoginInnerContainer };

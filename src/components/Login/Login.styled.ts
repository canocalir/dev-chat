import styled from "styled-components";

const LoginOuterContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
  margin: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 0.7rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    object-fit: contain;
    width: 12rem;
    margin-bottom: 3rem;
  }
  button {
    background-color: var(--devchat-color) !important;
    color: #ffffff;
    margin-top: 1rem;
  }
`;

export { LoginOuterContainer, LoginInnerContainer };

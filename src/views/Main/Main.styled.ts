import styled from "styled-components";

const MainViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) => props.theme.bgColorMain};
  flex-direction: column;
  gap: 1rem;
`;

const MainViewInner = styled.div`
  text-align: center;
  background-color: #ffffff;
  box-shadow: ${(props) => props.theme.loginBoxShadow};
  padding: 3rem;
  border-radius: 1rem;
  > img {
    width: 10rem;
  }
`;

export {MainViewInner, MainViewContainer}
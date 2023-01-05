import styled from "styled-components";

const RootLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AppLoadingInnerContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpenSideBarButton = styled.div`
  height: 5rem;
  margin-top: 6.5rem;
  position: absolute;
  .MuiSvgIcon-root {
    cursor: pointer;
    color: #809c05;
    font-size: 2.5rem;
  }
`;
export {
  RootLayout,
  AppLoadingContainer,
  AppLoadingInnerContents,
  OpenSideBarButton,
};

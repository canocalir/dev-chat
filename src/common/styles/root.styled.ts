import styled from "styled-components";

const RootLayout = styled.div`
    display: flex;
    height: 100vh;
`;

const AppLoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
`

const AppLoadingInnerContents = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
`
export { RootLayout, AppLoadingContainer, AppLoadingInnerContents };

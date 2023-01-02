import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: var(--devchat-color);
  flex: 0.3;
  color: #ffffff;
  max-width: 20rem;
  margin-top: 3.9rem;
`;

const SidebarHeader = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 0.1rem solid #96c723;
  border-bottom: 0.1rem solid #96c723;
  background-color: #a9c40f;
  > .MuiSvgIcon-root {
    color: #96c723;
    padding: 0.7rem;
    font-size: 1.3rem;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #e0ff99;
      transition: 300ms ease-in;
    }
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h2 {
    font-size: 1.2rem;
    font-weight: 900;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 400;
    .MuiSvgIcon-root {
        font-size: 1rem;
        color: green;
        margin: 0.1rem 0.2rem 0 0;
    }
  }
`;

export { SidebarContainer, SidebarHeader, SidebarInfo };

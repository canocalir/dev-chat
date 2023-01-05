import styled from "styled-components";

interface SidebarProps {
  sideOpen: any;
}

const SidebarContainer = styled.div<SidebarProps>`
  background-color: ${(props) => props.theme.mainDarkColor};
  flex: 0.3;
  color: #ffffff;
  min-width: 15rem;
  max-width: 20rem;
  margin-top: 3.9rem;
  overflow-y: scroll;
  z-index: 99;
  display: ${(props) => (!props.sideOpen ? "block" : "none")};
  ::-webkit-scrollbar {
    width: 0.3rem;
    &-track {
      background: #dfdfdf;
    }
    &-thumb {
      background: ${(props) => props.theme.sideBarColor1};
    }
  }
  hr {
    margin: 0.6rem 0 0.6rem 0;
    border: 0.07rem solid ${(props) => props.theme.sideBarColor1};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 0.1rem solid ${(props) => props.theme.sideBarColor1};
  border-bottom: 0.1rem solid ${(props) => props.theme.sideBarColor1};
  background-color: ${props => props.theme.sideBarLinkColor1};;
  > .MuiSvgIcon-root {
    color: ${(props) => props.theme.sideBarColor1};
    padding: 0.7rem;
    font-size: 1.1rem;
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
  position: relative;
  p {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #70cf30;
    background-color: #1a1a1a;
    font-size: 1.2rem;
    border-radius: 0.4rem;
    padding: 0.4rem;
    &:hover {
      background-color: ${props => props.theme.sideBarLinkColor2};
      color: #ffffff;
      transition: 300ms ease-in;
    }
  }

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
      color: ${props => props.theme.sideBarLinkColor2};
      margin: 0.1rem 0.2rem 0 0;
    }
  }
  hr {
    border: solid 1px ${(props) => props.theme.midBorderColor};
  }
`;

export { SidebarContainer, SidebarHeader, SidebarInfo };

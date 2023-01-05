import styled from "styled-components";

const SideBarLinkContainer = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  &:hover{
    opacity:0.9;
    background-color: ${props => props.theme.sideBarLinkColor1};
    transition: 300ms ease-in;
  }
  h3{
    font-weight: 500;
    span{
        padding: 1rem;
    }
  }
`;

const SideBarLinkChannel = styled.h3`
    font-size: 1rem;
    padding: 0.6rem;
    font-weight: 400;
`;

export { SideBarLinkContainer, SideBarLinkChannel };

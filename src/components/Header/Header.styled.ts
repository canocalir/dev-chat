import { Avatar } from "@material-ui/core";
import styled from "styled-components";

const RightSection = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  .MuiSvgIcon-root {
    color: #ffffff;
    margin-left: 1rem;
  }
  > .avatar {
    margin-right: 2rem;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 0.3rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0.2rem 1rem;
  background-color: #83a30d;
  color: #cacaca;
  border: 0.1rem #cacaca solid;
  input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    width: 100%;
    outline: 0;
    color: #ffffff;
    &::placeholder {
      color: #e0e0e0;
    }
  }
  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.mainDarkColor};
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  color: #ffffff;
  gap: 0.2rem;
`;
const LeftSection = styled.div`
  flex: 0.3;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin: 0 2rem 0 2rem;
  align-items: center;
  .MuiSvgIcon-root {
    color: #ffffff;
  }
`;

const MainAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export { MainAvatar, LeftSection, HeaderContainer, RightSection, HeaderSearch };

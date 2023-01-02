import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <MainAvatar //TODO: Add onclick
        />
        <AccessTime />
      </LeftSection>
      <HeaderSearch>
        <input placeholder="Search Messages" type="text" name="" id="" />
        <Search />
      </HeaderSearch>
      <RightSection>
        <HelpOutline />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

//Header Styled Components

const RightSection = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  .MuiSvgIcon-root {
    color: #ffffff;
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
  background-color: var(--devchat-color);
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  color: #ffffff;
`;
const LeftSection = styled.div`
  flex: 0.3;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
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

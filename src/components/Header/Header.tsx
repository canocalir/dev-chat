import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { FC } from "react";
import {
  HeaderContainer,
  HeaderSearch,
  LeftSection,
  MainAvatar,
  RightSection,
} from "./Header.styled";

const Header: FC = () => {
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

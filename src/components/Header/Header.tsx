import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { FC } from "react";
import {
  HeaderContainer,
  HeaderSearch,
  LeftSection,
  MainAvatar,
  RightSection,
} from "./Header.styled";
import { auth } from "../../config/firebase";
import useGetGoogleData from "../../hooks/useGetGoogleData";

const Header: FC = () => {
  const { userName, userImage } = useGetGoogleData();

  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <MainAvatar onClick={signOutHandler} alt={userName} src={userImage} />
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

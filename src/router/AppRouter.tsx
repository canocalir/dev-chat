import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import {
  AppLoadingContainer,
  AppLoadingInnerContents,
  RootLayout,
} from "../common/styles/root.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../views/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Login from "../components/Login/Login";
import { Comment } from "react-loader-spinner";
import imageLogo from '../assets/mainlogo.jpg'
import { ThemeProvider } from "styled-components";
import { theme } from "../common/styles/theme";

const AppRouter = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoadingInnerContents>
          <img width={300} src={imageLogo} alt="logo" />
          <Comment
            visible={true}
            height="100"
            width="100"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#7eb910"
          />
        </AppLoadingInnerContents>
      </AppLoadingContainer>
    );
  }
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <RootLayout>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </RootLayout>
        </>
      )}
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;

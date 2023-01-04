import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { RootLayout } from "../common/styles/root.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../views/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Login from "../components/Login/Login";

const AppRouter = () => {
  const [user, loading] = useAuthState(auth);
  return (
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
  );
};

export default AppRouter;

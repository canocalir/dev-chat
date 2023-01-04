import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { RootLayout } from "../common/styles/root.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../views/Chat/Chat";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <RootLayout>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />}/>
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default AppRouter;

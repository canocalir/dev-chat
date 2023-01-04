import { ToastContainer } from "react-toastify";
import { useAppSelector } from "./app/hooks";
import CustomModal from "./components/Modal/Modal";
import AppRouter from "./router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { FC } from "react";

const App: FC = () => {
  const { isOpen } = useAppSelector((state) => state.modal);

  return (
    <>
      {isOpen && <CustomModal />}
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;

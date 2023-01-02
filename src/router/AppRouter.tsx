import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../views/Home/Home"
import Header from "../components/Header/Header"
import {RootLayout} from "../common/styles/root.styled"
import Sidebar from "../components/Sidebar/Sidebar"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
    <RootLayout>
      <Sidebar/>
    <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
    </Routes>
    </RootLayout>
    </BrowserRouter>
  )
}

export default AppRouter


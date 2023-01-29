//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmAccount from "./components/ConfirmAccount";

//components
import Error404 from "./components/Error404";
import ForgotPassword from "./components/ForgotPassword";
import Home from './components/Home';
import TemplateLayout from "./components/layout/TemplateLayout";
import NewPassword from "./components/NewPassword";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TemplateLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/confirm-account/:token" element={<ConfirmAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/:token" element={<NewPassword />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Error404 from "./components/Error404";
import ForgotPassword from "./components/ForgotPassword";
import Home from './components/Home';
import TemplateLayout from "./components/layout/TemplateLayout";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TemplateLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

//instances
const socket = socketIO.connect('http://127.0.0.1:5173');
import { BrowserRouter, Routes, Route } from "react-router-dom";

//libraries
import socketIO from 'socket.io-client';
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
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

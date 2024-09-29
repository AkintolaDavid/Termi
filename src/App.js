import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import "./output.css";
import Signup from "./(auth)/Signup";
import Signin from "./(auth)/Signin";
import ResetPassword from "./(auth)/ResetPassword";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/landing" element={<Landing />}></Route>

        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        {/* <Route path="/" element={ }></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

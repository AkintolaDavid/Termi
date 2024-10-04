import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import "./output.css";
import Signup from "./(auth)/Signup";
import Signin from "./(auth)/Signin";
import ResetPassword from "./(auth)/ResetPassword";
import { ChakraProvider } from "@chakra-ui/react";
import VerifyOtp from "./(auth)/VerifyOtpForgotPassword";
import Newpassword from "./(auth)/Newpassword";
import { ToastProvider } from "./ToastContext";
export default function App() {
  return (
    <ChakraProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Landing />} />
            <Route path="/" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            {/* <Route path="/landing" element={<Landing />}></Route> */}

            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route
              path="/verifyotpforgetpassword"
              element={<VerifyOtp />}
            ></Route>
            <Route path="/newpassword" element={<Newpassword />}></Route>
            {/* <Route path="/" element={ }></Route> */}
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ChakraProvider>
  );
}

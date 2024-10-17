import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./output.css";
import Signup from "./(auth)/Signup";
import Signin from "./(auth)/Signin";
import ResetPassword from "./(auth)/ResetPassword";
import { ChakraProvider } from "@chakra-ui/react";
import Newpassword from "./(auth)/Newpassword";
import VerifyOtpForgotPassword from "./(auth)/VerifyOtpForgotPassword";
import VerifyOtpSignup from "./(auth)/VerifyOtpSignup";
import { ToastProvider } from "./ToastContext";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import ApiConsole from "./ApiConsole";
import WalletProceed from "./WalletProceed";
import Wallet from "./Wallet";
import Profile from "./Profile";
import ProtectedLayout from "./ProtectedLayout"; // Import your ProtectedLayout

export default function App() {
  return (
    <ChakraProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="/verifyotpforgetpassword"
              element={<VerifyOtpForgotPassword />}
            />
            <Route path="/verifyotpsignup" element={<VerifyOtpSignup />} />
            <Route path="/newpassword" element={<Newpassword />} />

            {/* Protected Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <ProtectedLayout />{" "}
                  {/* Wrap protected routes with this layout */}
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/walletproceed" element={<WalletProceed />} />
              <Route path="/api-console" element={<ApiConsole />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ChakraProvider>
  );
}

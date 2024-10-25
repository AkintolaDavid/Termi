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
import ProtectedLayout from "./ProtectedLayout";
import SuccessPage from "./SuccessPage";
import PaymentFailed from "./FailedPage";
import PaymentSuccess from "./SuccessPage";
import PaymentIframePage from "./PaymentIframePage";

export default function App() {
  return (
    <ChakraProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="/verifyotpforgetpassword"
              element={<VerifyOtpForgotPassword />}
            />
            <Route path="/verifyotpsignup" element={<VerifyOtpSignup />} />
            <Route path="/newpassword" element={<Newpassword />} />
            <Route path="/failedpage" element={<PaymentFailed />} />
            <Route path="/successpage" element={<PaymentSuccess />} />
            <Route path="/payment-iframe" element={<PaymentIframePage />} />
            {/* Protected Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <ProtectedLayout />{" "}
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

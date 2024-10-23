import React, { useState } from "react";
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast, CircularProgress } from "@chakra-ui/react"; // Import CircularProgress
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";

export default function Signin() {
  const toast = useToast();
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [login, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handlePasswordToggle = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          login,
          password,
        }
      );
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      console.log(token);
      if (response.status === 200) {
        toast({
          title: "User Login Successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Login failed";
      if (errorResponse) {
        if (errorResponse.errors && errorResponse.errors.login) {
          errorMessage = "Please enter valid login credentials";
        } else if (errorResponse.message) {
          errorMessage = errorResponse.message;
        }
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false); // Reset loading state after processing
    }
  };

  return (
    <div className="flex h-[100vh] font-montserrat">
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[65%] bg-[#F7FAFC] h-[84%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF0F2] p-2 gap-4"
        >
          <div className="text-3xl">👋</div>
          <span className="text-[25px] font-semibold">Welcome back!</span>
          <span className="text-[13px] font-medium mb-3">
            Let's build something great
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Email
              </label>
              <input
                type="text"
                value={login}
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                required
              />
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA] w-full"
                  required
                />
                <span
                  onClick={handlePasswordToggle}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {isPasswordVisible ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#8F90AD]">
                  Must be at least 8 characters
                </span>
                <Link to="/resetpassword">
                  <span className="text-[10px] text-[#8F90AD] underline underline-offset-1">
                    Forgot password?
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#4C6FFF] mt-1 rounded-[6px] h-9 w-[80%] text-[12px] font-medium text-white"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <CircularProgress isIndeterminate color="blue.300" size="24px" />
            ) : (
              "Sign in"
            )}
          </button>

          <Link to="/" className="mt-3">
            <span className="text-[14px] text-[#586979] underline underline-offset-1">
              Do not have an account? Sign Up
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

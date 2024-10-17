import React, { useState } from "react"; // Import useState for managing password visibility
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import icons for the eye visibility
import axios from "axios"; // Import Axios for API requests

export default function Signin() {
  const toast = useToast();
  const navigate = useNavigate();

  // State for password visibility and inputs
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState(""); // State for password input
  const [login, setEmail] = useState(""); // State for email or phone number input

  const handlePasswordToggle = () => {
    setIsPasswordVisible((prev) => !prev); // Toggle the password visibility
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Make API request to sign in
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
          position: "top-right", // Position the toast
        });
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during login:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Login failed"; // Default message
      if (errorResponse) {
        // If specific error for email is present
        if (errorResponse.errors && errorResponse.errors.login) {
          errorMessage = "Please enter valid login credentials"; // Access the email error message
        } else if (errorResponse.message) {
          errorMessage = errorResponse.message; // Use general error message if available
        }
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex h-[100vh] font-montserrat">
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form
          onSubmit={handleSubmit} // Add onSubmit to the form
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
                type="text" // Use appropriate input type
                value={login} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                required // Add required validation
              />
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Password
              </label>
              <div className="relative">
                {" "}
                {/* Relative position for the eye icon */}
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                  value={password} // Bind the input value to state
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA] w-full"
                  required // Add required validation
                />
                <span
                  onClick={handlePasswordToggle} // Toggle password visibility on click
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
            type="submit" // Specify button type as submit
            className="bg-[#4C6FFF] mt-1 rounded-[6px] h-9 w-[80%] text-[12px] font-medium text-white"
          >
            Sign in
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

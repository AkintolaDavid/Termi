import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/authimg/sign.png";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyOtpForgotPassword() {
  const toast = useToast();
  const navigate = useNavigate();
  const [joinotp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState(""); // State for password
  const [password_confirmation, setpassword_confirmation] = useState(""); // State for confirm password
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...joinotp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move back to the previous input if backspace is pressed
    if (event.key === "Backspace" && index > 0 && !joinotp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const email = localStorage.getItem("userEmailpassword");
  const otp = joinotp.join("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== password_confirmation) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/reset_password`,
        {
          email,
          otp,
          password,
          password_confirmation,
        }
      );

      if (response.status === 200) {
        toast({
          title: "Password reset successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error during password reset:", error);

      const errorResponse = error.response?.data?.errors;

      if (errorResponse) {
        // Check for password errors and show toast
        if (errorResponse.password && Array.isArray(errorResponse.password)) {
          toast({
            title: errorResponse.password[0], // Display first error in password array
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }

        // Check for OTP errors and show toast
        if (errorResponse.otp && Array.isArray(errorResponse.otp)) {
          toast({
            title: errorResponse.otp[0], // Display OTP error
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }

        // Check for password confirmation errors and show toast
        if (
          errorResponse.password_confirmation &&
          Array.isArray(errorResponse.password_confirmation)
        ) {
          toast({
            title: errorResponse.password_confirmation[0], // Display password confirmation error
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }
      } else {
        toast({
          title: "An unexpected error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-4/5 h-full" />
      </div>
      <div className="flex flex-col gap-2 h-screen w-1/2 items-center justify-center">
        {/* <div className="w-[65%] h-[300px] bg-[#f1f6fa] rounded-lg shadow-lg flex flex-col items-center">
          <div className="w-full text-center rounded-t-lg">
            <h2 className="bg-[#4C6FFF] rounded-t-lg text-white text-xl font-bold h-16 flex items-center justify-center">
              Verify OTP
            </h2>
          </div>

        

        
          <button
            className="mt-10 w-32 h-10 bg-[#4C6FFF] text-white rounded-md hover:bg-[#2B4AD1] transition duration-200"
            onClick={handleSubmit}
          >
            Submit OTP
          </button>
        </div> */}
        <div className="w-[65%] h-auto pb-10 bg-[#f1f6fa] rounded-lg shadow-lg flex flex-col items-center">
          {/* Header with blurred background */}
          <div className="w-full text-center rounded-t-lg">
            <h2 className="bg-[#4C6FFF] rounded-t-lg text-white text-xl font-bold h-16 flex items-center justify-center">
              CHANGE PASSWORD
            </h2>
          </div>

          {/* Password Input fields */}
          <div className="flex flex-col gap-3 mt-0 w-full items-center">
            <div className="flex flex-col w-[60%] ml-[20%] gap-2 mt-6">
              <label> Enter Otp below</label>
              <div className="flex gap-4 mt-2">
                {joinotp.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength="1"
                    className="w-10 h-10 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                ))}
              </div>{" "}
            </div>
            <div className="flex flex-col w-[60%] gap-2">
              <label>New password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Set password state
                className="pl-3 h-[35px] rounded-[8px]"
                required
              />
            </div>
            <div className="flex flex-col w-[60%] gap-2">
              <label>Confirm new password</label>
              <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setpassword_confirmation(e.target.value)} // Set confirm password state
                className="pl-3 h-[35px] rounded-[8px]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="mt-8 w-[60%] h-10 bg-[#4C6FFF] text-white rounded-md hover:bg-[#2B4AD1] transition duration-200"
            onClick={handleSubmit}
          >
            Submit Password
          </button>
        </div>
        <Link to="/signin" className="mt-3">
          <span className="text-[14px] text-[#586979] underline underline-offset-1">
            Already have an account? Login
          </span>
        </Link>
      </div>
    </div>
  );
}

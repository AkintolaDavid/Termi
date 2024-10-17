import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import pic from "../assets/authimg/sign.png";
import { useToast } from "@chakra-ui/react"; // Import Chakra's useToast
import axios from "axios";
export default function VerifyOtpSignup() {
  const [joinotp, setOtp] = useState(["", "", "", ""]);
  const toast = useToast(); // Get toast function from Chakra
  const inputRefs = useRef([]);
  const navigate = useNavigate(); // Initialize useNavigate

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

  const email = localStorage.getItem("userEmail");
  const otp = joinotp.join("");
  const resendotp = async () => {
    try {
      // Make API request to sign in
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/resend_otp`,
        { email }
      );

      if (response.status === 200) {
        toast({
          title: "OTP sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "an error occured"; // Default message
      if (errorResponse) {
        if (errorResponse.errors && errorResponse.errors.email) {
          errorMessage = "an error occured"; // Access the email error message
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
  const handleSubmit = async () => {
    // Join the OTP array to form the full OTP string

    try {
      // Make API request to sign in
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/verify_otp`,
        { email, otp }
      );

      if (response.status === 200) {
        toast({
          title: "OTP verified successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Otp verification failed"; // Default message
      if (errorResponse) {
        if (errorResponse.errors && errorResponse.errors.email) {
          errorMessage = "an error occured"; // Access the email error message
        } else if (errorResponse.errors && errorResponse.errors.otp) {
          errorMessage = "Please enter valid otp"; // Access the email error message
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
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-4/5 h-full" />
      </div>
      <div className="flex flex-col gap-2 h-screen w-1/2 items-center justify-center">
        <div className="w-[65%] h-[300px] bg-[#f1f6fa] rounded-lg shadow-lg flex flex-col items-center">
          <div className="w-full text-center rounded-t-lg">
            <h2 className="bg-[#4C6FFF] rounded-t-lg text-white text-xl font-bold h-16 flex items-center justify-center">
              Verify OTP
            </h2>
          </div>

          <div className="flex gap-4 mt-16">
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
          </div>

          {/* Submit Button */}
          <button
            className="mt-10 w-32 h-10 bg-[#4C6FFF] text-white rounded-md hover:bg-[#2B4AD1] transition duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <span
          className="text-[14px] text-[#586979] underline underline-offset-1 mt-3"
          onClick={resendotp}
        >
          Didn't receive otp? Send again
        </span>

        <Link to="/signin" className="mt-3">
          <span className="text-[14px] text-[#586979] underline underline-offset-1">
            Already have an account? Login
          </span>
        </Link>
      </div>
    </div>
  );
}

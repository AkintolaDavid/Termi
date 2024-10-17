import React from "react";
import { useState } from "react";
import axios from "axios";
import pic from "../assets/authimg/sign.png";
import padlock from "../assets/authimg/padlock.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export default function ResetPassword() {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const sendlink = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/forget_password`,
        { email }
      );

      // Handle successful registration
      if (response.status === 200) {
        localStorage.setItem("userEmailpassword", email);
        toast({
          title: "password reset otp sent Successful.",
          // description: "Check your mail for OTP sent",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right", // Position the toast
        });
        navigate("/verifyotpforgetpassword");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "an error occured"; // Default message
      if (errorResponse) {
        errorMessage = "Email is not registered"; // Use general error message if available
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
    <div className="flex h-[100vh]">
      {/* <div className="w-[50%] bg-red-300"></div> */}
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex flex-col justify-center items-center gap-2">
        <form className="w-[60%]  h-auto flex flex-col   justify-center   gap-3">
          <div>
            <img src={padlock} alt="padlock" className="h-20" />
          </div>
          <span className="text-[25px] font-semibold">Password Reset</span>
          <span className="text-[13px] font-medium mb-3">
            {" "}
            Enter the email you used to register and we will send you a reset
            link
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex flex-col w-[100%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Email
              </label>
              <input
                type="text" // Use appropriate input type
                value={email} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            onClick={sendlink}
            className="bg-[#4C6FFF] mt-3 rounded-[6px] h-9 w-[100%] text-[12px] font-medium text-white"
          >
            Send me the link
          </button>
        </form>
        <Link to="/signin" className="mt-3">
          <span className="text-[14px] text-[#586979] underline underline-offset-1">
            Already have an account? Login
          </span>
        </Link>
      </div>
    </div>
  );
}

// VerifyOtpForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/authimg/sign.png";
import { useToast } from "../ToastContext"; // Import the useToast hook

export default function VerifyOtpForgotPassword() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const addToast = useToast(); // Get addToast function from context

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    // Here you would check if the OTP is correct
    // For demonstration, we show a success toast and navigate to the new password page
    addToast("OTP verified successfully!", "success"); // Show success toast
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
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="w-10 h-10 text-center text-2xl border-2 border-gray-300 rounded-md"
              />
            ))}
          </div>

          {/* Submit Button */}
          <Link to="/newpassword">
            <button
              className="mt-10 w-32 h-10 bg-[#4C6FFF] text-white rounded-md hover:bg-[#2B4AD1] transition duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
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

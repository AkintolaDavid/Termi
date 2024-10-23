import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/authimg/sign.png";

import { useToast } from "../ToastContext";
export default function Newpassword() {
  const addToast = useToast();
  const handleSubmit = () => {
    addToast("Password changed successfully!", "success");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-4/5 h-full" />
      </div>

      <div className="flex  flex-col gap-2 h-screen w-1/2 items-center justify-center">
        <div className="w-[65%] h-[350px] bg-[#f1f6fa] rounded-lg shadow-lg flex flex-col items-center">
          {/* Header with blurred background */}
          <div className="w-full  text-center rounded-t-lg">
            <h2 className="bg-[#4C6FFF] rounded-t-lg text-white text-xl font-bold h-16 flex items-center justify-center">
              CHANGE PASSWORD
            </h2>
          </div>

          {/* OTP Input fields */}
          <div className="flex flex-col gap-3 mt-6 w-full items-center">
            <div className="flex flex-col w-[60%] gap-2">
              <label>New password</label>
              <input className=" h-[35px] rounded-[8px]" />
            </div>
            <div className="flex flex-col w-[60%] gap-2">
              <label>Confirm new password</label>
              <input className=" h-[35px] rounded-[8px]" />
            </div>
          </div>

          {/* Submit Button */}
          <Link to="/">
            <button
              className="mt-8 w-32 h-10 bg-[#4C6FFF] text-white rounded-md hover:bg-[#2B4AD1] transition duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
        <Link to="/" className="mt-3">
          <span className="text-[14px] text-[#586979] underline underline-offset-1">
            Already have an account? Login
          </span>
        </Link>
      </div>
    </div>
  );
}

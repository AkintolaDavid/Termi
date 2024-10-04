import React from "react";
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";

import { useToast } from "../ToastContext";
export default function Signup() {
  const addToast = useToast(); // Get addToast function from context
  const navigate = useNavigate();
  const handleSubmit = () => {
    addToast(" User registered successfully!", "success");
    navigate("/signin");
  };
  return (
    <div className="flex h-[100vh]">
      {/* <div className="w-[50%] bg-red-300"></div> */}
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form className="w-[65%] bg-[#F7FAFC] h-[84%] flex flex-col items-center justify-center gap-2 rounded-[12px] border-[1px] border-[#EFF0F2] p-2">
          <span className="text-[22px] font-semibold">Create your account</span>
          <span className="text-[14px] font-medium mb-2">
            It's free and easy
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex justify-between w-[80%] gap-1">
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your firstname
                </label>
                <input
                  className="h-8 text-[#7E868E]  pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your firstname"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your lastname
                </label>
                <input
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>
            <div className="flex justify-between w-[80%] gap-1">
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your phone number
                </label>
                <input
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your Email
                </label>
                <input
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Company name
              </label>
              <input
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px]  border-[1px] border-[#E4E6EA] "
                placeholder="Enter your company name"
              />
            </div>

            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Your password{" "}
              </label>
              <input
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px]  border-[1px] border-[#E4E6EA] "
                placeholder="Enter your password"
              />
              <span className="text-[10px] text-[#8F90AD]">
                Must be atleast 8 characters
              </span>
            </div>
          </div>
          <div className="flex  w-[80%] items-start gap-3 mt-1">
            <input type="checkbox" className="h-6 w-6 " />
            <span className="text-[10px] font-normal mt-[1px] text-[#586979]">
              By creating an account means you agree to the{" "}
              <span className="font-medium">Terms and Conditions</span>, and our{" "}
              <span className="font-medium">Privacy Policy</span>
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#4C6FFF] mt-3 rounded-[6px] h-9 w-[80%] text-[12px] font-medium text-white"
          >
            Register
          </button>
          <Link to="/signin" className="mt-3">
            <span className="text-[14px] text-[#586979] underline underline-offset-1">
              Already have an account? Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

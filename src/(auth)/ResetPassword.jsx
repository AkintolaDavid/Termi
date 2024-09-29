import React from "react";
import pic from "../assets/authimg/sign.png";
import padlock from "../assets/authimg/padlock.png";
export default function ResetPassword() {
  return (
    <div className="flex h-[100vh]">
      {/* <div className="w-[50%] bg-red-300"></div> */}
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form className="w-[60%] h-[84%] flex flex-col   justify-center   gap-3">
          <div>
            <img src={padlock} alt="padlock" className="h-20" />
          </div>
          <span className="text-[25px] font-semibold">Password Reset</span>
          <span className="text-[13px] font-medium mb-3">
            {" "}
            Enter your email or phone number and we will send you a reset link
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex flex-col w-[100%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Email or phone number
              </label>
              <input
                className="h-9 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                placeholder="Enter your email or phone number"
              />
            </div>
          </div>

          <button className="bg-[#4C6FFF] mt-3 rounded-[6px] h-9 w-[100%] text-[12px] font-medium text-white">
            Send me the link
          </button>
        </form>
      </div>
    </div>
  );
}

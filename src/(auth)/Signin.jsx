import React from "react";
import pic from "../assets/authimg/sign.png";
import { ImFacebook } from "react-icons/im";
import pic2 from "../assets/authimg/goggle.png";
import pic3 from "../assets/authimg/apple.png";
import { Link, useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/landing");
  };
  return (
    <div className="flex h-[100vh]">
      {/* <div className="w-[50%] bg-red-300"></div> */}
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form className="w-[60%] bg-[#F7FAFC] h-[84%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF0F2] p-2 gap-4">
          <div className="text-3xl">👋</div>
          <span className="text-[25px] font-semibold">Welcome back!</span>
          <span className="text-[13px] font-medium mb-3">
            {" "}
            Let's build something great
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Email or phone number
              </label>
              <input className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]" />
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                {" "}
                password{" "}
              </label>
              <input className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[14px]  border-[1px] border-[#E4E6EA] " />
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#8F90AD]">
                  Must be atleast 8 characters
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
            onClick={handleSubmit}
            className="bg-[#4C6FFF] mt-1 rounded-[6px] h-9 w-[80%] text-[12px] font-medium text-white"
          >
            Sign in
          </button>
          <div className="flex">
            <div>
              <span className="h-2 bg-red-400 w-20"></span>
            </div>
            <span className="text-[#7A7A9D] text-[11px] mt-2  mb-2">
              or do it via other accounts{" "}
            </span>
            <div>
              {" "}
              <hr />
            </div>
          </div>
          <div className="flex gap-4 mt-0">
            <div className="h-10 w-12 bg-white rounded-lg flex items-center justify-center border-[1px] border-[#E2E6EB]">
              <img src={pic2} alt="icon" className="h-5 w-5" />
            </div>
            <div className="h-10 w-12 bg-white rounded-lg flex items-center justify-center border-[1px] border-[#E2E6EB]">
              <img src={pic3} alt="icon" className="h-5 w-5" />
            </div>
            <div className="h-10 w-14 bg-white rounded-lg flex items-center justify-center border-[1px] border-[#E2E6EB]">
              <ImFacebook className="text-[#3B5999] text-[20px] h-5 w-5" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

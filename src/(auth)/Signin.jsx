import React from "react";
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../ToastContext";
export default function Signin() {
  const addToast = useToast(); // Get addToast function from context

  const navigate = useNavigate();
  const handleSubmit = () => {
    addToast("Sign in successful!", "success");

    navigate("/dashboard");
  };
  return (
    <div className="flex h-[100vh] font-montserrat">
      {/* <div className="w-[50%] bg-red-300"></div> */}
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form className="w-[65%] bg-[#F7FAFC] h-[84%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF0F2] p-2 gap-4">
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
          <Link to="/" className="mt-3">
            <span className="text-[14px] text-[#586979]   underline underline-offset-1">
              Do not have an account? Sign Up
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

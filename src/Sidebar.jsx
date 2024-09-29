import React from "react";
import logo from "./assets/Capture.PNG";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";
import { TbChartDonut } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import close from "./assets/cards/Group 7.png";
export default function Sidebar() {
  return (
    <div className="w-[23%]  border-[1px] border-r-[#EAECF0] ">
      <div className="h-full flex flex-col justify-between pt-5 pb-8 pl-[5%] pr-[5%]">
        <div className="flex flex-col ">
          <img src={logo} alt="logo" className="h-10 object-contain" />
          <div className="flex flex-col mt-3 gap-1 ">
            <span className="w-full h-[35px] rounded-[6px] hover:bg-[#4263EB] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <HiOutlineSquares2X2 className="ml-3 text-[21px] text-[#868E96] hover:text-white" />{" "}
              Dashboard
            </span>
            <span className="w-full h-[35px] hover:bg-[#4263EB]  rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <PiPaperPlaneTiltBold className="ml-3 text-[21px] text-[#868E96] hover:text-white" />{" "}
              Reports
            </span>
            <span className="w-full h-[35px] hover:bg-[#4263EB]  rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <BiWallet className="ml-3 text-[21px] text-[#868E96] hover:text-white" />{" "}
              Wallet
            </span>
            <span className="w-full h-[35px] hover:bg-[#4263EB]  rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <HiOutlineShoppingCart className="ml-3 text-[21px] text-[#868E96] hover:text-white" />{" "}
              Pricing
            </span>
            <span className="w-full h-[35px] hover:bg-[#4263EB]  rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <TbChartDonut className="ml-3 text-[21px] text-[#868E96] hover:text-white" />{" "}
              Profile
            </span>
            <span className="w-full h-[35px] hover:bg-[#4263EB]  rounded-[6px]  hover:text-white flex items-center text-[14px] font-semibold gap-3">
              <TbUsers className="ml-3 text-[21px]  group-hover:text-white text-[#868E96]" />{" "}
              Developer
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="bg-[#f8fafc] h-[auto] pb-5 w-[95%] rounded-[9px] ">
            <div className=" flex justify-between  px-[10%] pt-4">
              <span className="text-[14px] font-semibold ">Your plan</span>
              <span>
                <img src={close} alt="close" className="h-[17px] w-[17px]" />
              </span>
            </div>
            <div className=" flex flex-col px-[10%] pt-5 gap-[5px]  ">
              <div className="flex justify-between ">
                <span className="text-[13px] text-[#495057]">Emails sent </span>
                <span className="text-[13px] text-[#495057]">50 of 100</span>
              </div>
              <div className="w-full bg-gray-300 rounded-lg">
                <div className="bg-blue-600 h-1 rounded-lg w-[50%]"></div>
              </div>
              <div className="flex justify-between  mt-[8px]">
                <span className="text-[13px] text-[#495057]">SMS sent</span>
                <span className="text-[13px] text-[#495057]">60 of 80</span>
              </div>
              <div className="w-full bg-gray-300 rounded-lg">
                <div className="bg-blue-600 h-1 rounded-lg w-[70%]"></div>
              </div>
              <div className="flex justify-between  mt-[8px]">
                <span className="text-[13px] text-[#495057]">
                  Daily requests
                </span>
                <span className="text-[13px] text-[#495057]">10 of 50</span>
              </div>
              <div className="w-full bg-gray-300 rounded-lg">
                <div className="bg-blue-600 h-1 rounded-lg w-[20%]"></div>
              </div>
            </div>
          </div>
          <span className="w-full h-[35px] hover:bg-[#4263EB]   rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
            <MdOutlineSupportAgent className="ml-3 text-[21px]  hover:text-white text-[#868E96]" />{" "}
            Support
          </span>
          <span className="w-full h-[35px] hover:bg-[#4263EB]   rounded-[6px] text-black hover:text-white flex items-center text-[14px] font-semibold gap-3">
            <IoSettingsSharp className="ml-3 text-[21px]  hover:text-white text-[#868E96]" />{" "}
            Settings
          </span>
        </div>
      </div>
    </div>
  );
}

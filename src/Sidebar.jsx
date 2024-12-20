import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/Capture.PNG";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbUsers, TbChartDonut } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import close from "./assets/cards/Group 7.png";

export default function Sidebar() {
  return (
    <div className="w-[25%] border-[1px] border-r-[#EAECF0]">
      <div className="h-[90px] flex items-center pl-[5%]">
        <img src={logo} alt="logo" className="h-[50px] object-contain" />
      </div>
      <div className="flex flex-col h-[calc(100vh-91px)] justify-between pb-6 pl-[5%] pr-[5%]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <HiOutlineSquares2X2
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Dashboard
            </NavLink>

            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <PiPaperPlaneTiltBold
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Reports
            </NavLink>

            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <BiWallet
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Wallet
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <HiOutlineShoppingCart
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Pricing
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <TbChartDonut
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Profile
            </NavLink>

            <NavLink
              to="/developer"
              className={({ isActive }) =>
                `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                  isActive
                    ? "bg-[#4263EB] text-white"
                    : "text-black hover:bg-[#4263EB] hover:text-white"
                }`
              }
            >
              <TbUsers
                className={({ isActive }) =>
                  ` ml-3 text-[26px] ${
                    isActive ? " text-white" : "text-[#868E96]"
                  }`
                }
              />
              Developer
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="bg-[#f8fafc] h-[auto] pb-5 w-[100%] rounded-[9px] ">
            <div className=" flex justify-between  px-[10%] pt-4">
              <span className="text-[18px] font-semibold ">Your plan</span>
              <span>
                {/* <img src={close} alt="close" className="h-[20px] w-[20px]" /> */}
              </span>
            </div>
            <div className=" flex flex-col px-[10%] pt-5 gap-[5px]  ">
              <div className="flex justify-between ">
                <span className="text-[16px] font-medium text-[#495057]">
                  Units left{" "}
                </span>
                <span className="text-[16px] font-medium text-[#495057]">
                  100
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-lg">
                {/* <div className="bg-blue-600 h-1 rounded-lg w-[50%]"></div> */}
              </div>

              <div className="flex justify-between  mt-[8px]">
                <span className="text-[16px] font-medium text-[#495057]">
                  Total requests
                </span>
                <span className="text-[16px] font-medium text-[#495057]">
                  50
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-lg">
                {/* <div className="bg-blue-600 h-1 rounded-lg w-[20%]"></div> */}
              </div>
            </div>
          </div>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                isActive
                  ? "bg-[#4263EB] text-white"
                  : "text-black hover:bg-[#4263EB] hover:text-white"
              }`
            }
          >
            <MdOutlineSupportAgent
              className={({ isActive }) =>
                ` ml-3 text-[26px] ${
                  isActive ? " text-white" : "text-[#868E96]"
                }`
              }
            />
            Support
          </NavLink>

          <NavLink
            to="/api-console"
            className={({ isActive }) =>
              `w-full h-[40px] rounded-[6px] flex items-center text-[18px] font-semibold gap-3 ${
                isActive
                  ? "bg-[#4263EB] text-white"
                  : "text-black hover:bg-[#4263EB] hover:text-white"
              }`
            }
          >
            <IoSettingsSharp
              className={({ isActive }) =>
                ` ml-3 text-[26px] ${
                  isActive ? " text-white" : "text-[#868E96]"
                }`
              }
            />
            API Console
          </NavLink>
        </div>
      </div>
    </div>
  );
}

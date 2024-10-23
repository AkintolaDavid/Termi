import React, { useState } from "react";
import icon from "./assets/cards/Icon4.png";
import icon2 from "./assets/cards/icon42.png";
import { FaArrowRight } from "react-icons/fa6";
import close from "./assets/cards/Group 7.png";
export default function AccountApproved() {
  const [approved, setApproved] = useState(false);
  return (
    <div className="bg-[#155EEF1A] h-[160px] rounded-[8px] flex border-[#155EEF1A] border-[1px] ">
      <div className="flex justify-between w-full px-4">
        {" "}
        <div>
          {approved ? (
            <div className="flex pl-2 pt-5 gap-7">
              <img src={icon} alt="icon" className="h-[64px] w-[64px]" />
              <div className="flex flex-col w-[800px]">
                <span className="text-[20px] text-[#4263EB] font-semibold">
                  Your account is approved
                </span>
                <span className="text-[15px] text-[#495057] leading-[18px] mt-[3px]">
                  Your account has been approved and you can now send up to 100
                  emails per month. Need more? Order a plan by clicking the
                  upgrade button below. The free plan includes 3,000 emails per
                  month.
                </span>
                <button
                  onClick={() => {
                    setApproved(false);
                  }}
                  className=" flex rounded-[6px] items-center h-[35px] w-[180px] bg-[#4263EB] justify-center text-white gap-[15px] text-[15px] mt-3 px-2"
                >
                  Get started <FaArrowRight className="text-white" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex pl-2 pt-5 gap-7">
              <img src={icon2} alt="icon" className="h-[64px] w-[64px]" />
              <div className="flex flex-col w-[800px]">
                <span className="text-[20px] text-[#E8590C] font-semibold">
                  Your account is pending approval
                </span>
                <span className="text-[15px] text-[#495057] leading-[18px] mt-[3px]">
                  Your account has been approved and you can now send up to 100
                  emails per month. Need more? Order a plan by clicking the
                  upgrade button below. The free plan includes 3,000 emails per
                  month.{" "}
                </span>
                <button
                  onClick={() => {
                    setApproved(true);
                  }}
                >
                  set approved
                </button>
              </div>
            </div>
          )}
        </div>
        <img src={close} alt="close" className="h-[25px] w-[25px] mt-5 mr-2" />
      </div>
    </div>
  );
}

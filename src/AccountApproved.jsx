import React, { useState } from "react";
import icon from "./assets/cards/Icon4.png";
import icon2 from "./assets/cards/icon42.png";
import { FaArrowRight } from "react-icons/fa6";
import close from "./assets/cards/Group 7.png";
export default function AccountApproved() {
  const [approved, setApproved] = useState(false);
  return (
    <div className="bg-[#155EEF1A] h-[140px] mt-5 rounded-[8px] flex items-center border-[#155EEF1A] border-[1px] ">
      <div className="flex items-start justify-around w-full px-4">
        {" "}
        <div>
          {approved ? (
            <img src={icon} alt="icon" className="h-[50px] w-[50px]" />
          ) : (
            <img src={icon2} alt="icon" className="h-[50px] w-[50px]" />
          )}
        </div>
        {approved ? (
          <div className="flex flex-col w-[700px]">
            <span className="text-[17px] text-[#4263EB] font-semibold">
              Your account is approved
            </span>
            <span className="text-[13px] leading-[15px] mt-[1px]">
              Your account has been approved and you can now send up to 100
              emails per month. Need more? Order a plan by clicking the upgrade
              button below. The free plan includes 3,000 emails per month.
            </span>
            <button
              onClick={() => {
                setApproved(false);
              }}
              className=" flex rounded-[6px] items-center h-[32px] w-[125px] bg-[#4263EB] justify-center text-white gap-[14px] text-[14px] mt-3"
            >
              Get started <FaArrowRight className="text-white" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-[700px]">
            <span className="text-[17px] text-[#E8590C] font-semibold">
              Your account is pending approval
            </span>
            <span className="text-[13px] leading-[15px] mt-[1px]">
              Your account has been approved and you can now send up to 100
              emails per month. Need more? Order a plan by clicking the upgrade
              button below. The free plan includes 3,000 emails per month.{" "}
            </span>
            <button
              onClick={() => {
                setApproved(true);
              }}
            >
              set approved
            </button>
          </div>
        )}
        <img src={close} alt="close" className="h-[24px] w-[24px]  " />
      </div>
    </div>
  );
}

import React from "react";
import icon1 from "./assets/cards/Icon.png";
import icon2 from "./assets/cards/Icon-1.png";
import icon3 from "./assets/cards/Icon-2.png";
import badge from "./assets/cards/Badge.png";
import dots from "./assets/cards/dots.png";
export default function DashboardCards() {
  return (
    <div className="flex w-[100%] justify-between">
      <div className=" rounded-[12px] bg-white w-[31%] h-[160px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-2">
          <div className=" flex  justify-between">
            <img src={icon1} alt="icon" className="h-[44px] w-[44px]" />{" "}
            <img src={dots} alt="icon" className="h-[20px] w-[20px]" />
          </div>
          <div>
            <span className="text-[14px] text-[#495057] font-medium">
              Wallet Balance
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[28px] font-semibold">5,139</span>
            <button className="flex rounded-[6px] items-center h-[32px] w-[100px] bg-[#4263EB] justify-center text-white  text-[14px]">
              Fund wallet
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-[12px] bg-white w-[31%] h-[160px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-2">
          <div className=" flex  justify-between">
            <img src={icon2} alt="icon" className="h-[44px] w-[44px]" />{" "}
            <img src={dots} alt="icon" className="h-[20px] w-[20px]" />
          </div>
          <div>
            <span className="text-[14px] text-[#495057] font-medium">
              {" "}
              Total SMS Sent{" "}
            </span>
          </div>
          <div className="flex justify-between  items-center">
            <span className="text-[28px] font-semibold">5,691</span>
            <img src={badge} alt="badge" className="h-[21px] w-53px]" />
          </div>
        </div>
      </div>
      <div className=" rounded-[12px] bg-white w-[31%] h-[160px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-2">
          <div className=" flex  justify-between">
            <img src={icon3} alt="icon" className="h-[44px] w-[44px]" />{" "}
            <img src={dots} alt="icon" className="h-[20px] w-[20px]" />
          </div>
          <div>
            <span className="text-[14px] text-[#495057] font-medium">
              Carts recovered
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[28px] font-semibold">920</span>
            <img src={badge} alt="badge" className="h-[21px] w-[53px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

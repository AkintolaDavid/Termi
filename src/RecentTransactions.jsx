import React from "react";
import dots from "./assets/cards/dots.png";

const RecentTransactions = () => {
  const data = [
    {
      id: "Discover our new app features",
      name: "Wallet credit",
      amount: 100000,
      time: "10:00AM",
      date: "10/01/2023",
    },
    {
      id: "Discover our new app features",
      name: "Wallet debit",
      amount: -7000,
      time: "10:00AM",
      date: "10/01/2023",
    },
    {
      id: "Discover our new app features",
      name: "Wallet credit",
      amount: 12000,
      time: "10:00AM",
      date: "10/01/2023",
    },
  ];

  return (
    <div className="flex flex-col w-[100%] mt-8 border-[1px]  border-[#EAECF0] rounded-[5px]">
      <div className="h-[62px] rounded-t-[5px] flex justify-between items-center pl-6 text-[18px] font-semibold bg-white">
        Recent Transactions
        <img src={dots} alt="icon" className="h-[20px] w-[20px] mr-6" />
      </div>
      <table className="w-[100%] border-collapse border-t border-b border-[#EAECF0] ">
        <thead>
          <tr>
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[38%]">
              Transactions ID
            </th>
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[25%]">
              Transactions
            </th>
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
              Amount
            </th>
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
              Time
            </th>
          </tr>
        </thead>

        <tbody className="bg-white  text-[14px] ">
          {data.map((item) => (
            <tr key={item.id} className="  ">
              <td className="text-left h-[65px] text-black font-medium border-t border-b border-[#EAECF0] p-2 pl-6 w-[38%]">
                {item.id}
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[25%]">
                {item.name}
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
                <div
                  className={`${
                    item.amount > 0
                      ? "flex items-center justify-center bg-[#ECFDF3] h-[20px] rounded-[6px] w-[60px] text-[12px] text-[#2B8A3E] border-[1px] border-[#D3F9D8]"
                      : "flex items-center justify-center bg-[#FF0000] h-[20px] rounded-[6px] w-[60px] text-[12px] text-white border-[1px] border-[#E8590C]"
                  } `}
                >
                  ₦{Math.abs(item.amount)}
                </div>
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
                <div className="flex flex-col">
                  <span className="text-black">{item.date}</span>
                  <span className="text-[12px]">at {item.time}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;

import React from "react";
import dots from "./assets/cards/dots.png";

const MessageReport = () => {
  const data = [
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      status: "sent",
      time: "10:00 AM",
      date: "2023-10-01",
      pages: "2",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      status: "sent",
      time: "10:00 AM",
      date: "2023-10-01",
      pages: "2",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      status: "sent",
      time: "10:00 AM",
      date: "2023-10-01",
      pages: "2",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
    {
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      status: "pending",
      time: "2:00 PM",
      date: "2023-10-02",
      pages: "142",
    },
  ];

  return (
    <div className="flex flex-col w-[100%] border-[1px]  border-[#EAECF0] rounded-[5px]">
      <div className="h-[62px] rounded-t-[5px] flex justify-between items-center pl-6 text-[18px] font-semibold bg-white">
        Message Reports
        {/* <img src={dots} alt="icon" className="h-[20px] w-[20px] mr-6" /> */}
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
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[4%]">
              Time
            </th>
            <th className="text-left text-[#495057] text-[12px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[11%]">
              Time
            </th>
          </tr>
        </thead>

        <tbody className="bg-white  text-[14px] ">
          {data.map((item) => (
            <tr key={item.id} className="  ">
              <td className="text-left h-[65px] text-black font-medium border-t border-b border-[#EAECF0] p-2 pl-6 w-[38%]">
                {item.name}
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[25%]">
                {item.phoneNumber}
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
                <div
                  className={`${
                    item.status === "sent"
                      ? "flex items-center justify-center bg-[#ECFDF3] h-[20px] rounded-[6px] w-[60px] text-[12px] font-semibold text-[#2B8A3E] border-[1px] border-[#D3F9D8]"
                      : "flex items-center justify-center bg-[#FF0000] h-[20px] rounded-[6px] w-[60px] text-[12px] font-semibold text-white border-[1px] border-[#E8590C]"
                  } `}
                >
                  {item.status}
                </div>
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
                <div className="flex flex-col">
                  <span className="text-black">{item.date}</span>
                  <span className="text-[12px]">at {item.time}</span>
                </div>
              </td>
              <td className="text-left h-[65px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[17%]">
                <div>{item.pages}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageReport;

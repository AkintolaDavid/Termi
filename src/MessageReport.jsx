import React from "react";
import dots from "./assets/cards/dots.png";
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
];
export default function MessageReport() {
  return (
    <div className=" ">
      <div className="flex  w-[100%] justify-between bg-white h-[55px] items-center rounded-tl-[12px] rounded-tr-[12px] px-4 border-[#EAECF0] border-[1px]">
        <span className="text-[16px] font-bold">Message Reports</span>
        <img src={dots} alt="icon" className="h-[17px] w-[17px]" />
      </div>
      <hr />
      <div className="grid grid-cols-[4fr_2fr_1.5fr_2fr_1fr] px-4 h-[40px] items-center text-[12px] font-medium border-[#EAECF0] border-b-[1px] border-l-[1px] border-r-[1px]">
        <span>SMS</span>
        <span>Receiver</span>
        <span>Status</span>
        <span>Time</span>
        <span>Pages</span>
      </div>
      <hr />
      <div className="max-h-[400px] overflow-y-auto">
        {" "}
        {/* Outer container with fixed max height */}
        {data.map((item, i) => (
          <div key={i}>
            <div className="grid grid-cols-[4fr_2fr_1.5fr_2fr_1fr] px-4 h-[55px] bg-white items-center text-[14px] font-medium border-[#EAECF0] border-b-[1px] border-l-[1px] border-r-[1px]">
              <span>{item.name}</span>
              <span>{item.phoneNumber}</span>
              <span>{item.status}</span>
              <div className="flex flex-col">
                <span>{item.date}</span>
                <span>at {item.time}</span>
              </div>
              <span>{item.pages}</span>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

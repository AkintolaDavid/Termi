import React, { useEffect, useState } from "react";
import dots from "./assets/cards/dots.png";
import { useToast } from "@chakra-ui/react";
import axios from "axios"; // Import axios for API calls

const RecentTransactions = () => {
  const token = localStorage.getItem("token");
  const [transactions, setTransactions] = useState([]);
  const toast = useToast();

  // Function to format date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);

    // Format date as MM/DD/YYYY
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;

    // Format time as HH:MM AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }${ampm}`;

    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Pass the token in the headers
          }
        );

        // Format the transactions with date and time
        const formattedTransactions = response.data.data.transactions.map(
          (item) => {
            const { date, time } = formatDateTime(item.created_at); // assuming created_at is the field name
            return {
              ...item,
              date,
              time,
            };
          }
        );

        setTransactions(formattedTransactions); // Update transactions state with formatted data
      } catch (error) {
        console.error("Error fetching transactions:", error);
        toast({
          title: "Error fetching transactions",
          description: "Unable to retrieve transactions.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    };

    fetchTransactions();
  }, [token, toast]); // Add token and toast as dependencies

  return (
    <div className="flex flex-col w-[100%] mt-8 border-[1px] border-[#EAECF0] rounded-[5px] max-h-[600px] overflow-y-auto">
      {" "}
      {/* Added max height and overflow */}
      <div className="min-h-[62px] rounded-t-[5px] flex justify-between items-center pl-6 text-[20px] font-semibold bg-white">
        Recent Transactions
        {/* <img src={dots} alt="icon" className="h-[20px] w-[20px] mr-6" />s */}
      </div>
      <table className="w-[100%] border-collapse border-t border-b border-[#EAECF0] ">
        <thead>
          <tr>
            <th className="text-left text-[#495057] text-[16px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[20%]">
              Transactions ID
            </th>
            <th className="text-left text-[#495057] text-[16px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[30%]">
              Transactions
            </th>
            <th className="text-left text-[#495057] text-[16px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[14%]">
              Amount
            </th>
            <th className="text-left text-[#495057] text-[16px] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[10%]">
              Time
            </th>
          </tr>
        </thead>

        <tbody className="bg-white text-[14px] ">
          {transactions.map((item) => (
            <tr key={item.transaction_id} className="">
              <td className="text-left h-[65px] text-[16px] text-black font-medium border-t border-b border-[#EAECF0] p-2 pl-6 w-[20%]">
                {item.transaction_id}
              </td>
              <td className="text-left h-[65px] text-[16px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[30%]">
                {item.transaction_title}
              </td>
              <td className="text-left h-[65px] text-[16px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[14%]">
                <div
                  className={`${
                    item.amount > 0
                      ? "flex items-center justify-center bg-[#ECFDF3] h-[25px] rounded-[6px] w-[80px] text-[15px] text-[#2B8A3E] border-[1px] border-[#D3F9D8]"
                      : "flex items-center justify-center bg-[#FF0000] h-[25px] rounded-[6px] w-[80px] text-[15px] text-white border-[1px] border-[#E8590C]"
                  } `}
                >
                  <span>{`₦${Math.abs(item.amount).toLocaleString()}`}</span>
                </div>
              </td>
              <td className="text-left h-[65px] text-[15px] text-[#495057] font-normal border-t border-b border-[#EAECF0] p-2 pl-6 w-[10%]">
                <div className="flex flex-col">
                  <span className="text-black">{item.date}</span>
                  <span className="text-[14px]">at {item.time}</span>
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

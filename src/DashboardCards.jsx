import React, { useEffect, useState } from "react";
import icon1 from "./assets/cards/Icon.png";
import icon2 from "./assets/cards/Icon-1.png";
import icon3 from "./assets/cards/Icon-2.png";
import badge from "./assets/cards/Badge.png";
import dots from "./assets/cards/dots.png";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
export default function DashboardCards() {
  const toast = useToast(); // Chakra UI toast hook
  const [walletBalance, setWalletBalance] = useState(0);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Pass the token in the headers
          }
        );

        setWalletBalance(response.data.data.wallet.balance); // Update wallet balance from response
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
        toast({
          title: "Error fetching balance",
          description: "Unable to retrieve wallet balance.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    };

    fetchWalletBalance();
  }, [token, toast]); // Add token and toast as dependencies

  return (
    <div className="flex w-[100%] justify-between">
      <div className=" rounded-[12px] bg-white w-[31%] h-[200px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-5">
          <div className=" flex  justify-between">
            <img src={icon1} alt="icon" className="h-[50px] w-[50px]" />{" "}
            {/* <img src={dots} alt="icon" className="h-[20px] w-[20px]" /> */}
          </div>
          <div>
            <span className="text-[18px] text-[#495057] font-medium">
              Wallet Balance
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[28px] font-semibold"> ₦{walletBalance}</span>
            <button className="flex rounded-[6px] items-center h-[38px] w-[115px] bg-[#4263EB] justify-center text-white  text-[16px]">
              <Link to="/wallet"> Fund wallet</Link>
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-[12px] bg-white w-[31%] h-[200px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-5">
          <div className=" flex  justify-between">
            <img src={icon2} alt="icon" className="h-[50px] w-[50px]" />{" "}
            {/* <img src={dots} alt="icon" className="h-[20px] w-[20px]" /> */}
          </div>
          <div>
            <span className="text-[18px] text-[#495057] font-medium">
              {" "}
              Total SMS Sent{" "}
            </span>
          </div>
          <div className="flex justify-between  items-center">
            <span className="text-[28px] font-semibold">5,691</span>
            <img src={badge} alt="badge" className="h-[25px] w-[70px]" />
          </div>
        </div>
      </div>
      <div className=" rounded-[12px] bg-white w-[31%] h-[200px] flex items-center border-[#ECE9FEEA] border-[1px]">
        <div className="w-[90%] flex flex-col ml-[5%] gap-5">
          <div className=" flex  justify-between">
            <img src={icon3} alt="icon" className="h-[50px] w-[50px]" />{" "}
            {/* <img src={dots} alt="icon" className="h-[20px] w-[20px]" /> */}
          </div>
          <div>
            <span className="text-[18px] text-[#495057] font-medium">
              Carts recovered
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[28px] font-semibold">920</span>
            <img src={badge} alt="badge" className="h-[25px] w-[70px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

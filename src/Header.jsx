import React, { useEffect } from "react";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMoonLine } from "react-icons/ri";
import { Avatar } from "@chakra-ui/react";
import pic from "./assets/Capture.PNG";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
export default function Header() {
  const toast = useToast();
  const navigate = useNavigate();
  const [showdropdown, setshowdropdown] = useState(false);
  const token = localStorage.getItem("token");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [useremail, setuseremail] = useState("");
  useEffect(() => {
    const fetchuseremail = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Pass the token in the headers
          }
        );
        setfirstname(response.data.data.first_name);
        setlastname(response.data.data.last_name);

        setuseremail(response.data.data.email);
      } catch (error) {
        console.error("Error fetching user name:", error);
        toast({
          title: "Error fetching balance",
          description: "Unable to retrieve wallet balance.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    };

    fetchuseremail();
  }, [token, toast]); // Add token and toast as dependencies
  const handleLogout = async () => {
    // localStorage.clear();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/logout`,
        {}, // Empty request body (if needed)
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      );

      // Handle successful registration
      if (response.status === 200) {
        localStorage.removeItem("token");
        toast({
          title: "User Logout Successful.",
          // description: "Check your mail for OTP sent",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right", // Position the toast
        });
        navigate("/signin");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Registration failed"; // Default message
      if (errorResponse) {
        errorMessage = errorResponse.message; // Use general error message if available
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <div className="w-[100%]  border-[#EAECF0] border-b-[1px] bg-white">
      <div className="h-[90px] flex justify-between items-center px-5 ">
        <span className="text-[20px] font-medium">
          Welcome, {firstname} {lastname}
        </span>

        <div className="flex items-center">
          <div className="flex gap-3 mr-3">
            <IoNotificationsOutline className="text-[19px]" />
            <RiMoonLine className="text-[19px]" />
          </div>

          <div
            className="flex items-center gap-2"
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            <Avatar size="sm" name="John Doe" src={pic} />
            <div className="flex flex-col">
              <span className="text-[14px]">
                {firstname} {lastname}
              </span>
              <span className="text-[13px]">{useremail}</span>
            </div>
            {showdropdown && (
              <div
                onClick={handleLogout}
                className="rounded-[10px] text-xl absolute flex text-red-600 font-medium items-center justify-center bg-white h-[60px] w-[240px] top-[80px] border-[1px] border-gray-400"
              >
                Logout
              </div>
            )}
            <RiArrowDropDownLine className="text-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

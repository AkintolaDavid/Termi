import React, { useState } from "react";
import Header from "./Header";
import axios from "axios"; // Import Axios for API calls
import { useToast } from "@chakra-ui/react";

export default function Profile() {
  const toast = useToast();
  const [profile, setProfile] = useState(true);
  const [security, setSecurity] = useState(false);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    mobile: "",
    email: "",
    country: "",
    state: "",
    location: "",
  });

  const [securityData, setSecurityData] = useState({
    // oldPassword: "",
    password: "", // Changed from 'newPassword'
    password_confirmation: "", // Changed from 'repeatNewPassword'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityData({ ...securityData, [name]: value });
  };

  const handleToggleProfile = () => {
    setProfile(true);
    setSecurity(false);
  };

  const handleToggleSecurity = () => {
    setSecurity(true);
    setProfile(false);
  };

  // Function to validate form data
  const validateFormData = () => {
    const { dob, mobile, email } = formData;

    // Check if dob is in the future
    const dobDate = new Date(dob);
    if (dobDate > new Date()) {
      toast({
        title: "Invalid Date of Birth.",
        description: "Date of birth cannot be in the future.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }

    // Check if mobile number is valid (e.g., matches a pattern)
    const mobilePattern = /^\+?\d{10,15}$/; // Example: +1234567890 or 1234567890
    if (!mobilePattern.test(mobile)) {
      toast({
        title: "Invalid Mobile Number.",
        description: "Mobile number must be between 10 and 15 digits.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast({
        title: "Invalid Email Address.",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return false;
    }

    return true; // All validations passed
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!validateFormData()) return; // Run validations before proceeding

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/update_profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: "Profile updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateSecurity = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (securityData.password !== securityData.password_confirmation) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/change_password`,
        securityData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: "Password changed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      // Handle specific error cases
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex justify-center bg-[#f8fafc]">
        <div className="w-[95%] h-[92.5%] mt-[2.5%] bg-white flex flex-col pl-6 pt-5 gap-5">
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">
              Account Information
            </span>
            <span className="text-[14px] text-[#929EAE]">
              Update your account information
            </span>
          </div>
          <div className="h-[35px] flex w-[250px] rounded-md border-[1px]">
            <button
              onClick={handleToggleProfile}
              className={`flex items-center justify-center px-4 rounded-[4px] py-2 border-[#EEEEEE] w-[50%] ${
                profile ? "bg-[#3B5BDB] text-white" : "bg-white text-[#9B9B9B]"
              }`}
            >
              My profile
            </button>
            <button
              onClick={handleToggleSecurity}
              className={`flex items-center justify-center px-4 rounded-[4px] py-2 border-[#EEEEEE] w-[50%] ${
                security ? "bg-[#3B5BDB] text-white" : "bg-white text-[#9B9B9B]"
              }`}
            >
              Security
            </button>
          </div>
          {profile && (
            <form className="w-[700px]" onSubmit={handleUpdateProfile}>
              <div>
                <span className="font-medium text-[18px] flex mb-5">
                  Personal Information
                </span>
              </div>
              <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                <div className="flex flex-col gap-1">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Your firstname
                  </label>
                  <input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="Ayodele"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Your lastname
                  </label>
                  <input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="Frank"
                  />
                </div>
              </div>

              <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                <div className="flex flex-col gap-1 ">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 pr-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="27/09/1998"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="+123 456 7890"
                  />
                </div>
              </div>

              <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                <div className="flex flex-col gap-1 ">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="example@domain.com"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Country
                  </label>
                  <input
                    name="country"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                <div className="flex flex-col gap-1 ">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    State
                  </label>
                  <input
                    name="state"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="State"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[14px] font-medium text-[#1B212D]">
                    Location
                  </label>
                  <input
                    name="location"
                    onChange={handleInputChange}
                    required
                    className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-between">
                <button
                  type="submit"
                  className="bg-[#4263EB] text-white w-[700px] text-[16px] mt-6 h-[37px] rounded-[10px]"
                >
                  Update
                </button>
              </div>
            </form>
          )}{" "}
          {security && (
            <form className="w-[700px]" onSubmit={handleUpdateSecurity}>
              {/* Security Form Fields */}
              <div>
                <span className="font-medium text-[18px] flex mb-5">
                  Settings
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-[#1B212D]">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  value={securityData.oldPassword}
                  onChange={handleSecurityChange}
                  required
                  className="h-[37px] text-[#78778B] w-[100%] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your old password"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-[#1B212D]">
                  New Password
                </label>
                <input
                  type="password"
                  name="password" // Updated field name
                  value={securityData.password} // Updated value
                  onChange={handleSecurityChange}
                  required
                  className="h-[37px] text-[#78778B] w-[100%] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your new password"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium text-[#1B212D]">
                  Repeat New Password
                </label>
                <input
                  type="password"
                  name="password_confirmation" // Updated field name
                  value={securityData.password_confirmation} // Updated value
                  onChange={handleSecurityChange}
                  required
                  className="h-[37px] text-[#78778B] w-[100%] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                  placeholder="Repeat your new password"
                />
              </div>

              <button
                type="submit"
                className="bg-[#4263EB] text-white w-[700px] text-[16px] mt-6 h-[37px] rounded-[10px]"
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

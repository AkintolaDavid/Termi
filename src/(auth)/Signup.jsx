import React, { useState } from "react";
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react"; // Import useToast from Chakra UI
import axios from "axios"; // Import Axios

export default function Signup() {
  const toast = useToast(); // Get toast function from Chakra UI
  const navigate = useNavigate();

  // State for form fields
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Prepare data for registration
    const userData = {
      first_name,
      last_name,
      phone,
      email,
      companyName,
      password,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        userData // Axios automatically sets the Content-Type to application/json
      );

      // Handle successful registration
      if (response.status === 201) {
        localStorage.setItem("userEmail", email);
        toast({
          title: "User registered Successful.",
          description: "Check your mail for OTP sent",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right", // Position the toast
        });
        navigate("/verifyotpsignup");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Registration failed"; // Default message
      if (errorResponse) {
        // If specific error for email is present
        if (errorResponse.errors && errorResponse.errors.email) {
          errorMessage = errorResponse.errors.email[0]; // Access the email error message
        } else if (errorResponse.message) {
          errorMessage = errorResponse.message; // Use general error message if available
        }
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
    <div className="flex h-[100vh]">
      <div className="w-[50%] h-full flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="pic" className="w-[80%] h-[100%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <form
          className="w-[65%] bg-[#F7FAFC] h-[84%] flex flex-col items-center justify-center gap-2 rounded-[12px] border-[1px] border-[#EFF0F2] p-2"
          onSubmit={handleSubmit}
        >
          <span className="text-[22px] font-semibold">Create your account</span>
          <span className="text-[14px] font-medium mb-2">
            It's free and easy
          </span>
          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex justify-between w-[80%] gap-1">
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your firstname
                </label>
                <input
                  type="text"
                  value={first_name}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your firstname"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your lastname
                </label>
                <input
                  type="text"
                  value={last_name}
                  onChange={(e) => setLastname(e.target.value)}
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter your lastname"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-[80%] gap-1">
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your phone number
                </label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[13px] font-medium text-[#425466]">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Company name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="flex flex-col w-[80%] gap-1">
              <label className="text-[13px] font-medium text-[#425466]">
                Your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-8 text-[#7E868E] pl-3 rounded-[6px] text-[12px] border-[1px] border-[#E4E6EA]"
                placeholder="Enter your password"
                required
              />
              <span className="text-[10px] text-[#8F90AD]">
                Must be at least 8 characters
              </span>
            </div>
          </div>
          <div className="flex w-[80%] items-start gap-3 mt-1">
            <input type="checkbox" className="h-6 w-6" required />
            <span className="text-[10px] font-normal mt-[1px] text-[#586979]">
              By creating an account means you agree to the{" "}
              <span className="font-medium">Terms and Conditions</span>, and our{" "}
              <span className="font-medium">Privacy Policy</span>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#4C6FFF] mt-3 rounded-[6px] h-9 w-[80%] text-[12px] font-medium text-white"
          >
            Register
          </button>
          <Link to="/signin" className="mt-3">
            <span className="text-[14px] text-[#586979] underline underline-offset-1">
              Already have an account? Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

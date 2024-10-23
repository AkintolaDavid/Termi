import React, { useState } from "react";
import pic from "../assets/authimg/sign.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast, CircularProgress } from "@chakra-ui/react"; // Import CircularProgress
import axios from "axios";

export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();

  // State for form fields and loading
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    companyName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        localStorage.setItem("userEmail", formData.email);
        toast({
          title: "User registered successfully.",
          description: "Check your mail for OTP sent",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/verifyotpsignup");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      const errorResponse = error.response?.data;

      let errorMessage = "Registration failed";
      if (errorResponse) {
        errorMessage =
          errorResponse.errors?.email?.[0] ||
          errorResponse.message ||
          errorMessage;
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false); // Reset loading state after try/catch
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-[#F7FAFC]">
        <img src={pic} alt="Sign Up" className="w-4/5 h-full" />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <form
          className="w-3/5 bg-[#F7FAFC] h-4/5 flex flex-col items-center justify-center gap-2 rounded-lg border border-[#EFF0F2] p-2"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-sm font-medium mb-2">It's free and easy</p>

          <div className="flex flex-col w-full items-center gap-2">
            <div className="flex justify-between w-4/5 gap-1">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#425466]">
                  Your firstname
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                  placeholder="Enter your firstname"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#425466]">
                  Your lastname
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                  placeholder="Enter your lastname"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-4/5 gap-1">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#425466]">
                  Your phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-[#425466]">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-4/5 gap-1">
              <label className="text-sm font-medium text-[#425466]">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="flex flex-col w-4/5 gap-1">
              <label className="text-sm font-medium text-[#425466]">
                Your password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="h-8 text-[#7E868E] pl-3 rounded-md border border-[#E4E6EA]"
                placeholder="Enter your password"
                required
              />
              <span className="text-xs text-[#8F90AD]">
                Must be at least 8 characters
              </span>
            </div>
          </div>
          <div className="flex w-4/5 items-start gap-3 mt-1">
            <input type="checkbox" className="h-6 w-6" required />
            <span className="text-xs text-[#586979]">
              By creating an account means you agree to the{" "}
              <span className="font-medium">Terms and Conditions</span> and our{" "}
              <span className="font-medium">Privacy Policy</span>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#4C6FFF] mt-3 rounded-md h-9 w-4/5 text-sm font-medium text-white flex items-center justify-center"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <CircularProgress isIndeterminate color="green.300" size="24px" /> // Show loader
            ) : (
              "Register" // Button text
            )}
          </button>
          <Link to="/" className="mt-3">
            <span className="text-sm text-[#586979] underline">
              Already have an account? Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

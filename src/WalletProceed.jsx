import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import checkIcon from "./assets/cards/check.png";
import uncheckIcon from "./assets/cards/uncheck.png";
import paystackLogo from "./assets/paystack.png";
import flutterwaveLogo from "./assets/flutterwave.png";

import Header from "./Header";

export default function PaymentComponent() {
  const location = useLocation();
  const { amount } = location.state; // Amount passed through location.state
  const [selectedMethod, setSelectedMethod] = useState(null); // Track selected method
  const [loading, setLoading] = useState(false); // Loading state for button
  const [paymentUrl, setPaymentUrl] = useState(null); // For handling iframe
  const [showIframe, setShowIframe] = useState(false); // Track iframe visibility
  const toast = useToast();
  const token = localStorage.getItem("token"); // Ensure a valid token is set in localStorage
  const navigate = useNavigate();

  // Validate the amount before initiating the payment
  const validateAmount = () => {
    if (!amount || amount < 100) {
      toast({
        title: "Amount too low",
        description: "Please enter an amount higher than ₦100.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  // Function to handle Paystack payment initialization
  const initiatePaystackPayment = async () => {
    setLoading(true);

    if (!validateAmount()) return; // Validate the amount

    const paymentPayload = {
      amount: amount, // Paystack expects the amount in kobo
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/payment/paystack/initialize`,
        paymentPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        toast({
          title: "Payment initiated",
          description: "Loading Paystack payment page.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });

        setPaymentUrl(response.data.data[0].url); // Set payment URL for iframe
        setShowIframe(true); // Show iframe
      } else {
        toast({
          title: "Payment failed",
          description: response.data.message || "An error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(
        "Error initiating Paystack payment:",
        error.response?.data || error.message
      );
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Flutterwave payment initialization
  const initiateFlutterwavePayment = async () => {
    setLoading(true);

    if (!validateAmount()) return; // Validate the amount

    const paymentPayload = {
      amount: amount, // Flutterwave also expects the amount in kobo
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/payment/flw/initialize`,
        paymentPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        toast({
          title: "Payment initiated",
          description: "Loading Flutterwave payment page.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });

        setPaymentUrl(response.data.data.url); // Set payment URL for iframe
        setShowIframe(true); // Show iframe
      } else {
        toast({
          title: "Payment failed",
          description: response.data.message || "An error occurred.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(
        "Error initiating Flutterwave payment:",
        error.response?.data || error.message
      );
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Handling successful or failed payment callback URL
  useEffect(() => {
    const handlePaymentCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const paymentReference = params.get("reference");

      if (paymentReference) {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/payment/verify/${paymentReference}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.status) {
            toast({
              title: "Payment Successful",
              description: "Redirecting to your dashboard.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            setShowIframe(false); // Hide iframe after success
          } else {
            toast({
              title: "Payment Failed",
              description: response.data.message || "Please try again.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        } catch (error) {
          console.error(
            "Error verifying payment:",
            error.response?.data || error.message
          );
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } finally {
          navigate("/dashboard"); // Redirect to dashboard
        }
      }
    };

    handlePaymentCallback(); // Check the URL parameters for payment callback
  }, [navigate, token]);

  return (
    <div className="bg-[#f8fafc] w-[100%] h-[100%]">
      <Header />
      <div className="w-[95%] flex items-center mb-[2.5%] mt-[2.5%] ml-[2.5%] text-[20px] font-semibold pt-1">
        <Link to="/wallet" className="flex items-center gap-2.5">
          <FaArrowLeftLong className="text-xl" /> Back
        </Link>
      </div>
      <div className="flex justify-between ml-[2.5%] mr-[4%]">
        <div className="w-[70%] bg-[#ffffff] h-[auto]">
          {/* Paystack Method Selection */}
          <div
            onClick={() => setSelectedMethod("paystack")}
            className="payment-method-option"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #E0E0E0",
              paddingLeft: "15px",
              height: "100px",
            }}
          >
            <img
              src={selectedMethod === "paystack" ? checkIcon : uncheckIcon}
              alt="check"
              className="h-[18px] w-[18px] mr-3"
            />
            <img
              src={paystackLogo}
              alt="Paystack logo"
              className="h-[46px] w-[46px] rounded-full mr-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-[#243656] font-semibold">
                Fund wallet with Paystack
              </span>
              <span className="text-[14px] text-[#243656] font-normal">
                Pay with Card, Bank Transfer
              </span>
            </div>
          </div>

          {/* Flutterwave Method */}
          <div
            onClick={() => setSelectedMethod("flutterwave")}
            className="payment-method-option"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #E0E0E0",
              paddingLeft: "15px",
              height: "100px",
            }}
          >
            <img
              src={selectedMethod === "flutterwave" ? checkIcon : uncheckIcon}
              alt="check"
              className="h-[18px] w-[18px] mr-3"
            />
            <img
              src={flutterwaveLogo}
              alt="Flutterwave logo"
              className="h-[46px] w-[46px] rounded-full mr-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-[#243656] font-semibold">
                Fund wallet with Flutterwave
              </span>
              <span className="text-[14px] text-[#243656] font-normal">
                Pay with Card, Bank Transfer
              </span>
            </div>
          </div>

          {/* Iframe to show payment page */}
          {showIframe && (
            <iframe
              src={paymentUrl}
              style={{ width: "100%", height: "600px", border: "none" }}
              title="Payment"
            ></iframe>
          )}
        </div>

        <div className="w-[25%]">
          <div className="flex flex-col items-center justify-center bg-white w-[370px] h-[200px] text-[20px] font-medium gap-4 rounded-[8px]">
            <p className="text-[20px] text-[#5D5F5F]">Wallet Funding</p>{" "}
            <div className="flex justify-between w-[70%]">
              <span className="text-[#5D5F5F]">Total</span>
              <span className="text-[#5D5F5F]">₦{amount}</span>
            </div>
            <button
              onClick={() => {
                if (!selectedMethod) {
                  toast({
                    title: "Payment method required",
                    description:
                      "Please select a payment method before proceeding.",
                    status: "warning",
                    duration: 4000,
                    isClosable: true,
                  });
                  return;
                }
                // Trigger appropriate payment function based on the selected method
                if (selectedMethod === "paystack") {
                  initiatePaystackPayment();
                } else if (selectedMethod === "flutterwave") {
                  initiateFlutterwavePayment();
                }
              }}
              disabled={loading || !selectedMethod}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#4263EB",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
              className="h-[43px] w-[300px] bg-[#4263EB] text-[16px] text-white rounded-[8px] mt-10"
            >
              {loading ? "Processing..." : "Proceed with Payment"}
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col gap-5 w-[25%]">
          <div className="w-[100%] bg-[#ffffff] p-6 shadow-lg">
            <p className="text-[18px] text-[#243656] font-semibold">Summary</p>
            <p className="text-[16px] text-[#5c6b82]">Wallet Funding</p>
            <hr className="my-4" />
            <div className="flex justify-between text-[14px] font-medium text-[#5c6b82]">
              <span>Amount:</span>
              <span>₦{amount}</span>
            </div>
          </div>
          <button
            className="w-full py-3 bg-[#0067f4] text-white text-center text-[16px] font-medium rounded-lg shadow-md"
            onClick={
              selectedMethod === "paystack"
                ? initiatePaystackPayment
                : initiateFlutterwavePayment
            }
            disabled={!selectedMethod || loading}
          >
            {loading ? "Processing..." : "Proceed with Payment"}
          </button>
        </div> */}
      </div>
    </div>
  );
}

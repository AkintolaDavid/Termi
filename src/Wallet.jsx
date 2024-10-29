import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecentTransactions from "./RecentTransactions";
import trans from "./assets/cards/trans.png";
import copy from "./assets/cards/copy.png";
import { useDisclosure } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

export default function Wallet() {
  const toast = useToast();
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => <ModalOverlay bg="#C2C2C3" />;
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [approved, setapproved] = useState("");
  const [displaystatus, setdisplaystatus] = useState("");
  const [modalType, setModalType] = useState("");
  const [walletBalance, setWalletBalance] = useState(0); // State to hold wallet balance
  const [fundAmount, setFundAmount] = useState(""); // Amount to be funded by the user
  const navigate = useNavigate();
  const [bvn, setBvn] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [mobile_number, setmobile_number] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token"); // Assuming token is stored in local storage

  useEffect(() => {
    const userprofile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }, // Pass the token in the headers
          }
        );
        if (response.data.data.virtual_account) {
          setapproved(true);
          setBank(response.data.data.virtual_account.bank_name);
          setAccountNumber(response.data.data.virtual_account.account_number);
          setAccountName(response.data.data.virtual_account.account_name);
        }
        if (response.data.data.virtual_account.display_status) {
          setdisplaystatus(true);
        }
        // setWalletBalance(response.data.data.wallet.balance);
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

    userprofile();
  }, [token, toast]);
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

  // Handle copy action for account details
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    });
  };

  // Handle creating a virtual account
  const handleBVN = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/generate_virtual_account`,
        {
          bvn,
          date_of_birth,
          mobile_number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast({
          title: "Virtual account created successfully!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        onClose();
        navigate("/wallet");
      }
    } catch (error) {
      const errorResponse = error.response?.data;
      console.log(errorResponse);
      let errorMessage = "Login failed";
      if (errorResponse) {
        if (errorResponse?.error?.bvn) {
          errorMessage = "Enter a valid 11 digit BVN number";
        } else if (errorResponse.message) {
          // errorMessage = "Please enter a valid phone number";
          errorMessage = errorResponse.message;
        }
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle Fund Wallet
  const handleFundWallet = () => {
    // Check if the fundAmount is a valid number and is >= 100
    const amount = parseFloat(fundAmount);

    if (isNaN(amount) || amount < 100) {
      toast({
        title: "Amount too low",
        description: "Please enter an amount greater than ₦100.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return; // Do not proceed if the amount is less than 100 or invalid
    }

    // Proceed with the payment
    navigate("/walletproceed", { state: { amount: fundAmount } }); // Passing the amount to proceed
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex flex-col items-center ">
        {/* Modal */}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay /> {/* Transparent overlay */}
          <ModalContent
            bg="rgba(255, 255, 255, 1)" // Semi-transparent background for the modal content
            h={modalType === "createAccount" ? "600px" : "400px"}
            w={modalType === "createAccount" ? "850px" : "600px"}
            maxW={modalType === "createAccount" ? "850px" : "600px"}
            boxShadow="lg"
          >
            <ModalCloseButton />
            <ModalBody>
              <div className="flex h-full w-full flex-col justify-center items-center gap-10">
                {modalType === "fundWallet" ? (
                  <>
                    <div className="w-[90%]">
                      <Text className="text-[22px] font-semibold text-left">
                        Fund Wallet
                      </Text>
                    </div>
                    <div className="flex flex-col w-[500px] gap-1">
                      <label className="text-[16px] font-medium text-[#425466] mb-[4px]">
                        Enter Amount
                      </label>
                      <input
                        type="number"
                        className="h-[45px] text-[#7E868E] pl-3 rounded-[6px] text-[16px] border-[1px] border-[#E4E6EA]"
                        placeholder="Enter amount"
                        value={fundAmount}
                        onChange={(e) => setFundAmount(e.target.value)}
                      />
                    </div>

                    <Button
                      onClick={handleFundWallet}
                      w="500px"
                      h="45px"
                      bg="#4263EB"
                      color="white"
                      _hover={{ bg: "#4263EB" }}
                    >
                      Proceed
                    </Button>
                  </>
                ) : modalType === "createAccount" ? (
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-3 items-center mb-3">
                      <span className="text-[35px] font-bold text-center">
                        Let’s Create a Virtual Account{" "}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[22px] font-semibold">
                          BVN Details
                        </span>
                        <span className="text-[15px] font-normal">
                          We need your BVN details to create a wallet and
                          virtual account for you.{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[16px] font-normal text-[#425466] mb-[4px]">
                        Bank Verification Number (BVN)
                      </label>
                      <input
                        type="number"
                        className="h-[45px] text-[#7E868E] pl-3 rounded-[6px] text-[16px]  border-[1px] border-[#E0E0E0]"
                        placeholder="Enter BVN"
                        value={bvn}
                        onChange={(e) => setBvn(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[16px] font-normal text-[#425466] mb-[4px]">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="h-[45px] text-[#7E868E] pl-3 rounded-[6px] text-[16px]  border-[1px] border-[#E0E0E0]"
                        placeholder="Enter phone number"
                        value={mobile_number}
                        onChange={(e) => setmobile_number(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[16px] font-normal text-[#425466] mb-[4px]">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="h-[45px] pr-3 text-[#7E868E] pl-4 rounded-[6px] text-[16px]  border-[1px] border-[#E0E0E0]"
                        placeholder="Enter Date of Birth"
                        value={date_of_birth}
                        onChange={(e) => setdate_of_birth(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      w="400px"
                      h="45px"
                      bg="#4263EB"
                      color="white"
                      _hover={{ bg: "#4263EB" }}
                      rounded="10px"
                      onClick={handleBVN}
                      marginTop="5px"
                    >
                      {loading ? (
                        <CircularProgress
                          isIndeterminate
                          color="blue.300"
                          size="24px"
                        /> // Show loader
                      ) : (
                        "   Verify  " // Button text
                      )}
                    </Button>
                  </div>
                ) : null}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* Wallet Balance and Fund Wallet */}
        <div className="flex items-center justify-between w-[95%] h-[170px] mt-[2.5%] bg-white  pl-6 pt-5 gap-5">
          <div className="flex gap-4">
            <img src={trans} alt="trans" className="h-[120px] w-[150px]" />
            <div className="flex flex-col gap-1">
              <span className="text-[32px] font-semibold">
                ₦{walletBalance}
              </span>
              <span className="text-[#828282] text-[16px]">
                Total wallet balance
              </span>
              <button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setModalType("fundWallet"); // Set modal type
                  onOpen();
                }}
                className="font-medium text-white text-[18px] rounded-[6px] bg-[#4263EB] h-[40px] w-[150px]"
              >
                Fund wallet
              </button>
            </div>
          </div>

          {approved ? (
            displaystatus ? (
              <div className="mr-28 flex flex-col gap-2">
                <span className="text-[20px] font-semibold mb-2">
                  Virtual Account Details
                </span>
                <div className="flex">
                  <div className="text-[#57585A] text-[16px] font-medium w-[150px]">
                    Bank:
                  </div>
                  <div className="flex items-center text-[16px]">
                    {bank}
                    <img
                      src={copy}
                      onClick={() => handleCopy(bank)}
                      alt="copy"
                      className="h-[20px] ml-1.5"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="text-[#57585A] text-[16px] font-medium w-[150px]">
                    Account No:
                  </div>
                  <div className="flex items-center text-[16px]">
                    {accountNumber}
                    <img
                      src={copy}
                      onClick={() => handleCopy(accountNumber)}
                      alt="copy"
                      className="h-[20px] ml-1.5"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="text-[#57585A] text-[16px] font-medium w-[150px]">
                    Account Name:
                  </div>
                  <div className="flex items-center text-[16px]">
                    {accountName}
                    <img
                      src={copy}
                      onClick={() => handleCopy(accountName)}
                      alt="copy"
                      className="h-[20px] ml-1.5"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="mr-20 flex flex-col items-center justify-center gap-2 mb-3">
                <span className="text-[22px] font-semibold">
                  Virtual Account Suspended
                </span>
                <span className="text-[#828282] text-[16px] leading-4 w-[300px] text-center">
                  Your virtual account has been suspended, contact us for more
                  information
                </span>
              </div>
            )
          ) : (
            <div className="mr-20 flex flex-col items-center justify-center gap-2 mb-3">
              <span className="text-[22px] font-semibold">
                Virtual Account Details
              </span>
              <span className="text-[#828282] text-[16px] leading-4 w-[300px] text-center">
                Please complete your onboarding process to generate your virtual
                account
              </span>
              <button
                disabled={loading}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setModalType("createAccount"); // Set modal type
                  onOpen();
                }}
                className="font-medium text-white text-[18px] rounded-[6px] bg-[#4263EB] h-[40px] w-[170px]"
              >
                Create Account
              </button>
            </div>
          )}
        </div>

        {/* Recent Transactions */}
        <div className="w-[95%] flex flex-col mt-10">
          <RecentTransactions />
        </div>
      </div>
    </>
  );
}

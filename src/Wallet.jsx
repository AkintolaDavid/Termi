import React, { useState } from "react";
import Header from "./Header";
import RecentTransactions from "./RecentTransactions";
import trans from "./assets/cards/trans.png";
import copy from "./assets/cards/copy.png";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useToast } from "./ToastContext";

import { Link, useNavigate } from "react-router-dom";

export default function Wallet() {
  const addToast = useToast();
  const bank = "Providus Bank";
  const accountNumber = "1234567890"; // Example account number
  const accountName = "Abiola Ogunjobi"; // Example account name
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => <ModalOverlay bg="#C2C2C3" />;
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const [approved, setapproved] = useState(false);
  const [modalType, setModalType] = useState("");
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    });
  };

  const handleBVN = () => {
    setapproved(true);
    onClose(); // Close the modal
    addToast("Virtual acoount created successfully!", "success");
    navigate("/wallet"); // Navigate to wallet
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex flex-col items-center bg-[#f8fafc]">
        {/* Modal */}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent
            h={modalType === "createAccount" ? "600px" : "400px"}
            w={modalType === "createAccount" ? "850px" : "600px"}
            maxW={modalType === "createAccount" ? "850px" : "600px"}
          >
            <ModalCloseButton />
            <ModalBody>
              <div className="flex h-full w-full flex-col justify-center items-center gap-10">
                {/* Conditionally render based on modalType */}
                {modalType === "fundWallet" ? (
                  <>
                    <div className="w-[90%]">
                      <Text className="text-[20px] font-semibold text-left">
                        Fund Wallet
                      </Text>
                    </div>
                    <div className="flex flex-col w-[500px] gap-1">
                      <label className="text-[13px] font-medium text-[#425466]">
                        Enter Amount
                      </label>
                      <input
                        type="number"
                        className="h-[38px] text-[#7E868E] pl-3 rounded-[6px] text-[13px]  border-[1px] border-[#E4E6EA] "
                        placeholder="Enter amount"
                      />
                    </div>

                    <Link to="/walletproceed">
                      <Button
                        w="500px"
                        h="45px"
                        bg="#4263EB"
                        color="white"
                        _hover="#4263EB"
                      >
                        Proceed
                      </Button>
                    </Link>
                  </>
                ) : modalType === "createAccount" ? (
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-3 items-center mb-3">
                      <span className="text-[35px] font-bold text-center">
                        Let’s Create a Virtual Account{" "}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[20px] font-semibold">
                          BVN Details{" "}
                        </span>
                        <span className="text-[13px] font-normal">
                          We need your BVN details to create a wallet and
                          virtual account for you.{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[14px] font-normal text-[#425466]">
                        Bank Verification Number (BVN)
                      </label>
                      <input
                        type="number"
                        className="h-[38px] text-[#7E868E] pl-3 rounded-[12px] text-[14px]  border-[1px] border-[#E0E0E0] "
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[14px] font-normal text-[#425466]">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="h-[38px] text-[#7E868E] pl-3 rounded-[12px] text-[14px]  border-[1px] border-[#E0E0E0] "
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="flex flex-col w-[400px] gap-1">
                      <label className="text-[14px] font-normal text-[#425466]">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="h-[38px] pr-3 text-[#7E868E] pl-4 rounded-[12px] text-[14px]  border-[1px] border-[#E0E0E0] "
                        placeholder="Enter amount"
                      />
                    </div>
                    <Button
                      w="400px"
                      h="45px"
                      bg="#4263EB"
                      color="white"
                      _hover="#4263EB"
                      rounded="10px"
                      onClick={handleBVN}
                    >
                      Verify
                    </Button>
                  </div>
                ) : null}
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <div className="flex items-center justify-between w-[95%] h-[170px] mt-[2.5%] bg-white  pl-6 pt-5 gap-5">
          <div className="flex gap-4">
            <img src={trans} alt="trans" className="h-[120px] w-[150px]" />
            <div className="flex flex-col gap-1">
              <span className="text-[32px] font-semibold">₦0.00</span>
              <span className="text-[#828282] text-[14px]">
                Total wallet balance
              </span>
              <button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setModalType("fundWallet"); // Set modal type
                  onOpen();
                }}
                className="font-medium text-white text-[16px] rounded-[6px] bg-[#4263EB] h-[30px] w-[120px]"
              >
                Fund wallet
              </button>
            </div>
          </div>

          {approved ? (
            <div className="mr-28 flex flex-col gap-2">
              <span className="text-[20px] font-semibold">
                Virtual Account Details
              </span>
              <div className="flex">
                <div className="text-[#57585A] text-[14px] font-medium w-[120px]">
                  Bank:
                </div>
                <div className="flex items-center text-[14px]">
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
                <div className="text-[#57585A] text-[14px] font-medium w-[120px]">
                  Account No:
                </div>
                <div className="flex items-center text-[14px]">
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
                <div className="text-[#57585A] text-[14px] font-medium w-[120px]">
                  Account Name:
                </div>
                <div className="flex items-center text-[14px]">
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
              <span className="text-[20px] font-semibold">
                Virtual Account Details
              </span>
              <span className="text-[#828282] text-[12px] leading-4 w-[250px] text-center">
                Please complete your onboarding process to generate your virtual
                account
              </span>
              <button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setModalType("createAccount"); // Set modal type
                  onOpen();
                }}
                className="font-medium text-white text-[16px] rounded-[6px] bg-[#4263EB] h-[30px] w-[150px]"
              >
                Create Account
              </button>
            </div>
          )}
        </div>

        <div className="w-[95%] flex flex-col">
          <span className="text-[20px] font-semibold pt-10 pb-4">
            Recent Transactions
          </span>
          <RecentTransactions />
        </div>
      </div>
    </>
  );
}

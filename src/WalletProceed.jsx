import React, { useState } from "react";
import Header from "./Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import check from "./assets/cards/check.png";
import uncheck from "./assets/cards/uncheck.png";
import cardimg from "./assets/cards/cardimg.png";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { Modal } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ModalFooter } from "@chakra-ui/react";
import thank from "./assets/cards/thank.png";
import { useNavigate } from "react-router-dom";
export default function WalletProceed() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => <ModalOverlay bg="#C2C2C3" />;
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const navigate = useNavigate();
  const handleProceed = () => {
    setOverlay(<OverlayOne />);
    onOpen();
  };
  const modalhandleproceed = () => {
    onClose();
    navigate("/wallet");
  };
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex flex-col pt-[2.5%] pl-[2.5%] bg-[#f8fafc]">
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent h="400px" w="500px" maxW="500px">
            <ModalCloseButton />
            <ModalBody>
              <div className="flex h-full w-full flex-col justify-center items-center gap-7">
                <img src={thank} alt="thank" className="h-[200px] w-[200px]" />
                <span className="text-[24px] font-semibold">
                  Wallet Funding Successful!
                </span>

                <button
                  onClick={modalhandleproceed}
                  className="w-[430px] h-[45px] rounded-[8px] bg-[#4263EB] text-white hover:bg-[#4263EB]"
                >
                  Proceed
                </button>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <div className="w-[95%] flex items-center  mb-[2.5%] text-[20px] font-semibold  pt-1">
          <Link to="/wallet" className="flex items-center gap-2.5">
            <FaArrowLeftLong className="text-xl" /> Back
          </Link>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center bg-white w-[700px] h-[85px] gap-5 border-b-[1px] border-[#E0E0E0] rounded-t-[8px]">
              <img src={check} alt="check" className="h-[18px] w-[18px] ml-5" />
              <img src={cardimg} alt="check" className="h-[40px] w-[40px]" />
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#243656] font-semibold">
                  Fund wallet with Flutterwave
                </span>
                <span className="text-[14px] text-[#243656] font-normal">
                  Make payment using your debit card
                </span>
              </div>
            </div>
            <div className="flex items-center bg-white w-[700px] h-[85px] gap-5 border-b-[1px] border-[#E0E0E0]">
              <img src={check} alt="check" className="h-[18px] w-[18px] ml-5" />
              <img src={cardimg} alt="check" className="h-[40px] w-[40px]" />
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#243656] font-semibold">
                  Fund wallet with Flutterwave
                </span>
                <span className="text-[14px] text-[#243656] font-normal">
                  Make payment using your debit card
                </span>
              </div>
            </div>
            <div className="flex items-center bg-white w-[700px] h-[85px] gap-5 rounded-b-[8px]">
              <img src={check} alt="check" className="h-[18px] w-[18px] ml-5" />
              <img src={cardimg} alt="check" className="h-[40px] w-[40px]" />
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#243656] font-semibold">
                  Fund wallet with Flutterwave
                </span>
                <span className="text-[14px] text-[#243656] font-normal">
                  Make payment using your debit card
                </span>
              </div>
            </div>
          </div>

          <div className="mr-[2.5%]">
            <div className="flex flex-col items-center justify-center bg-white w-[370px] h-[240px] text-[20px] font-medium gap-4 rounded-[8px]">
              <div className="flex justify-between w-[70%]">
                <span className="text-[#5D5F5F]">Subtotal</span>
                <span>₦78,000.00</span>
              </div>
              <div className="flex justify-between w-[70%]">
                <span className="text-[#5D5F5F]">Total</span>
                <span>₦78,000.00</span>
              </div>
              <button
                onClick={handleProceed}
                className="h-[43px] w-[300px] bg-[#4263EB] text-[16px] text-white rounded-[8px] mt-10"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Header from "./Header";
import on from "./assets/cards/apion.png";
import off from "./assets/cards/apioff.png";
import { LuEye } from "react-icons/lu";
import { RiFileCopyLine } from "react-icons/ri";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Input,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function ApiConsole() {
  const [on_off, set_on_off] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isRegeneratePasswordModalOpen, setIsRegeneratePasswordModalOpen] =
    useState(false);
  const [isCopyable, setIsCopyable] = useState(false);
  const [password, setPassword] = useState("");

  const handleConfirmRegenerate = () => {
    onClose(); // Close confirmation modal
    setIsRegeneratePasswordModalOpen(true); // Open password modal for regenerate
  };

  const handleEyeClick = () => {
    setIsPasswordModalOpen(true); // Open password modal for secret key
  };

  const handlePasswordSubmit = () => {
    setIsPasswordModalOpen(false);
    setIsCopyable(true); // Enable copy for 5 seconds
    setTimeout(() => {
      setIsCopyable(false);
    }, 5000);
  };

  const handleRegeneratePasswordSubmit = () => {
    setIsRegeneratePasswordModalOpen(false);
    // Regenerate key logic can be placed here
    console.log("Regenerate key with password", password);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    });
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex flex-col items-center bg-[#f8fafc]">
        <div className="w-[95%] h-auto mt-[2.5%] bg-white flex flex-col pt-4 pb-5 gap-3 text-center">
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-[32px] font-semibold">API Integrations</span>
            <span className="text-[14px] text-center w-[93%] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis a condimentum vitae sapien pellentesque habitant morbi.
              Adipiscing elit ut aliquam purus sit amet luctus. Sed arcu non
              odio euismod lacinia at quis risus. Massa tincidunt nunc pulvinar
              sapien et ligula. Elementum integer enim neque volutpat ac
              tincidunt vitae. Fermentum dui faucibus in ornare quam viverra.
              Sed felis eget velit aliquet sagittis. Commodo viverra maecenas
              accumsan lacus vel facilisis volutpat. Est ullamcorper eget nulla
              facilisi etiam dignissim. Cras ornare arcu dui vivamus arcu felis
              bibendum ut. Rhoncus est pellentesque elit ullamcorper dignissim.
              Tellus orci ac auctor augue mauris. Eget felis eget nunc lobortis
              mattis aliquam. Ac tincidunt vitae semper quis lectus nulla at.
              Dignissim convallis aenean et tortor. Porta lorem mollis aliquam
              ut porttitor. Amet consectetur adipiscing elit pellentesque
              habitant morbi tristique senectus. Suspendisse in est ante in nibh
              mauris cursus. Consectetur purus ut faucibus pulvinar elementum
              integer enim neque volutpat. Nulla at volutpat diam ut venenatis
              tellus in. Felis eget nunc lobortis mattis aliquam faucibus purus.
              Nunc aliquet bibendum enim facilisis gravida. Sagittis nisl
              rhoncus mattis rhoncus urna neque viverra justo. Velit sed
              ullamcorper morbi tincidunt ornare massa. Aliquam nulla facilisi
              cras fermentum odio eu.
            </span>
          </div>
        </div>

        <div className="w-[95%] h-[300px] mt-[4.5%] bg-white flex flex-col p-6 gap-7">
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">API Integration</span>
            <div className="flex items-center gap-3">
              <span className="text-[13px]">OFF</span>
              <div onClick={() => set_on_off(!on_off)}>
                {on_off ? (
                  <img src={off} alt="off_or_on" />
                ) : (
                  <img src={on} alt="off_or_on" />
                )}
              </div>
              <span className="text-[13px]">ON</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#57585A] text-[14px]">Live Secret Key</span>
            <div className="flex items-center justify-between px-5 h-[38px] w-[850px] rounded-[12px] border-[1px] border-[#E0E0E0] text-[12px]">
              <span>
                {isCopyable
                  ? "sk_live_06378d79174..."
                  : "*************************************************************"}
              </span>

              <span onClick={isCopyable ? undefined : handleEyeClick}>
                {isCopyable ? (
                  <RiFileCopyLine
                    className={`h-[20px] w-[20px] ${
                      isCopyable ? "text-blue-500" : "text-black"
                    }`}
                    onClick={() => {
                      handleCopy("david"); // Copy only when the secret key is visible
                    }}
                  />
                ) : (
                  <LuEye
                    className="h-[20px] w-[20px] text-black"
                    // The eye click will open the password modal only
                  />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#57585A] text-[14px]">Live Public Key</span>
            <div className="flex items-center justify-between px-5 h-[38px] w-[850px] rounded-[12px] border-[1px] border-[#E0E0E0]">
              <span className="text-[14px]">
                sk_live_06378d79174ebrtthyuyb8fdb653d470f1587872
              </span>
              <span>
                <RiFileCopyLine className="h-[20px] w-[20px]" />
              </span>
            </div>
          </div>
          <div
            className="text-right text-red-600 cursor-pointer"
            onClick={onOpen}
          >
            Regenerate API Keys
          </div>

          {/* Modal for Regenerate API confirmation */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Regenerate API Keys</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Are you sure you want to regenerate your API keys? This action
                  cannot be undone.
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  ml={3}
                  onClick={handleConfirmRegenerate}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Modal for Password input (regenerate key) */}
          <Modal
            isOpen={isRegeneratePasswordModalOpen}
            onClose={() => setIsRegeneratePasswordModalOpen(false)}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => setIsRegeneratePasswordModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  ml={3}
                  onClick={handleRegeneratePasswordSubmit}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Modal for Password input (eye click) */}
          <Modal
            isOpen={isPasswordModalOpen}
            onClose={() => setIsPasswordModalOpen(false)}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => setIsPasswordModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" ml={3} onClick={handlePasswordSubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}

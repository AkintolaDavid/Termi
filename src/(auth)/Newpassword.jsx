import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Newpassword() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleSubmit = () => {};

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <VStack
        w="650px"
        h="450px"
        borderRadius="12px"
        spacing={10}
        // justify="center"
        align="center"
        bg="gray.200"
      >
        {/* Header with blurred background */}
        <Box
          w="100%"
          bg="rgba(255, 255, 255, 0.1)"
          style={{ backdropFilter: "blur(10px)" }} // Blurred background
          textAlign="center"
          display="flex"
          justifyContent="center"
        >
          <Text
            backgroundColor="#4C6FFF"
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            width="100%"
            height="70px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderTopRadius="12px"
          >
            CHANGE PASSWORD
          </Text>
        </Box>

        {/* OTP Input boxes */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt="20px"
          gap={6}
          width="100%"
        >
          <div className="flex flex-col w-[60%] gap-2">
            <label>New password</label>
            <input className=" h-[35px] rounded-[8px]" />
          </div>
          <div className="flex flex-col w-[60%] gap-2">
            <label>Confirm new password</label>
            <input className=" h-[35px] rounded-[8px]" />
          </div>
        </Box>

        {/* Submit Button */}
        <Link to="/signin">
          <Button
            w="150px"
            h="50px"
            bg="#4C6FFF"
            color="white"
            _hover={{ bg: "#2B4AD1" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Link>
      </VStack>
    </div>
  );
}

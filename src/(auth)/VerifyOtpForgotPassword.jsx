import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Handle OTP input
  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Only allow one digit per box
    setOtp(newOtp);

    // Automatically move to the next input box
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
  const handleSubmit = () => {
    // alert(`Entered OTP is: ${otp.join("")}`);
  };

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
            Verify OTP
          </Text>
        </Box>

        {/* OTP Input boxes */}
        <Box display="flex" justifyContent="center" mt="50px" gap={4}>
          {otp.map((value, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              maxLength="1"
              textAlign="center"
              fontSize="2xl"
              w="50px"
              h="60px"
              bg="white"
              border="2px solid #E2E8F0"
              borderRadius="8px"
            />
          ))}
        </Box>

        {/* Submit Button */}
        <Link to="/newpassword">
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

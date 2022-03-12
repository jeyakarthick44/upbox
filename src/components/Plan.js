import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";

const Plan = () => {
  return (
    <div>
      <Text className="plan-heading">Pick your plan</Text>
      <Box>
        <Text className="box-heading">Monthly</Text>
        <Text>$18/mo</Text>
        <Button
          style={{
            borderRadius: "20px",
            background: "none",
            border: "1px solid #4A4A4A",
            fontFamily: "DM Sans",
            fontStyle: "normal",
            fontWeight: " 500",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "0.12em",
            color: "#000000",
            marginTop: "10px",
          }}
          fontSize={"sm"}
          fontWeight={600}
          pl={6}
          pr={6}
          color={"black"}
          href={"#"}
        >
          SIGN UP &#62;
        </Button>
      </Box>
    </div>
  );
};

export default Plan;

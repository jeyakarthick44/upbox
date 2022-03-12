import React from "react";
import BOX from "../images/BOX.png";
import { Box, Text, Image, Button } from "@chakra-ui/react";
const Main = () => {
  return (
    <div className="main">
      <div className="hero-left">
        <Box>
          <Text className="hero-left-heading">
            Look good without leaving your house.
          </Text>
          <Text className="hero-left-para">
            Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest
            trends and send them directly to your door every month.
          </Text>
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
            //   display={{ base: "none", md: "inline-flex" }}
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
      <div className="hero-right">
        <Image src={BOX} alt="" />
      </div>
    </div>
  );
};

export default Main;

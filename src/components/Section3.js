import React from "react";
import { Text, Image } from "@chakra-ui/react";
import underline from "../images/underline.png";

const Section3 = () => {
  return (
    <div className="section3">
      <Text className="plan-heading">Pick your plan</Text>
      <Image className="plan-heading-img" src={underline} alt="" />
    </div>
  );
};

export default Section3;

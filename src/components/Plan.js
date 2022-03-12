import React from "react";
import { Text, Image } from "@chakra-ui/react";
import underline from "../images/underline.png";

const Plan = () => {
  return (
    <div>
      <Text className="plan-heading">Pick your plan</Text>
      <Image className="plan-heading-img" src={underline} alt="" />
      <div className="container">
        <div className="box1">
          <h1 className="box-head">Monthly</h1>
          <p className="box-para">$18/mo</p>
          <button className="plan-button">FIND YOUR BOX </button>
        </div>
        <div className="box2">
          <h1 className="box-head">Monthly</h1>
          <p className="box-para">$18/mo</p>
          <button className="plan-button">FIND YOUR BOX </button>
        </div>
      </div>
      <Text className="plan-last-para">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </Text>
    </div>
  );
};

export default Plan;

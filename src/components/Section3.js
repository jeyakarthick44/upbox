import React from "react";
import { Text, Image } from "@chakra-ui/react";
import underline from "../images/underline.png";
import girl from "../images/girl.png";
import girl2 from "../images/girl2.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import box2img from "../images/box2img.png";
const Section3 = () => {
  return (
    <div className="section3">
      <Text className="plan-heading1">Pick your plan</Text>
      <Image className="plan-heading-img1" src={underline} alt="" />
      <div className="whole-container">
        <div className="wrapper1">
          <div className="wrapper1-image-container">
            <img className="wrapper1-image" src={girl} alt="" />
            <img className="one" src={one} alt="" />
            <img className="art1" src={art1} alt="" />
          </div>
          <div className="right-wrapper1">
            <h1 className="wrapper1-heading">
              Setup your profile & preferences
            </h1>
            <p className="wrapper1-para">
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>
      </div>

      <div className="whole-container">
        <div className="wrapper1">
          <div className="wrapper1-image-container">
            <img className="wrapper1-image" src={box2img} alt="" />
            <img className="one" src={two} alt="" />
            <img className="art2" src={art2} alt="" />
          </div>
          <div className="right-wrapper1">
            <h1 className="wrapper1-heading">Review your custom box</h1>
            <p className="wrapper1-para">
              Once we get to know you, we will show you the box we’ve crafted.
              This is your chance to approve it before we ship it to your house.
            </p>
          </div>
        </div>
      </div>

      <div className="whole-container">
        <div className="wrapper1">
          <div className="wrapper1-image-container">
            <img className="wrapper1-image" src={girl2} alt="" />
            <img className="one" src={three} alt="" />
            <img className="art2" src={art2} alt="" />
          </div>
          <div className="right-wrapper1">
            <h1 className="wrapper1-heading">Try it on at home</h1>
            <p className="wrapper1-para">
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
      </div>
      <button className="try-button">TRY IT FOR YOURSELF &#62;</button>
    </div>
  );
};

export default Section3;

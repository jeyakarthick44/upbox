import React from "react";
import { Box } from "@chakra-ui/react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

import { SimpleGrid } from "@chakra-ui/react";
const Section4 = () => {
  return (
    <>
      <div className="section4">
        <p className="social">Social Posts</p>
      </div>
      <SimpleGrid
        columns={[1, 2, 4]}
        ml={5}
        mr={5}
        spacing="20px"
        className="grid"
        style={{ marginTop: "-500px" }}
      >
        <Box>
          <img className="social-img" src={img1} alt="" />
          <h1 className="social-head">
            How to rock the lip look that turns heads
          </h1>
        </Box>
        <Box>
          <img className="social-img" src={img2} alt="" />
          <h1 className="social-head">
            How to rock the lip look that turns heads
          </h1>
        </Box>
        <Box>
          <img className="social-img" src={img3} alt="" />
          <h1 className="social-head">
            How to rock the lip look that turns heads
          </h1>
        </Box>
        <Box>
          <img className="social-img" src={img4} alt="" />
          <h1 className="social-head">
            How to rock the lip look that turns heads
          </h1>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Section4;

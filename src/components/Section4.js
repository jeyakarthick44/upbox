import React from "react";
import { Box } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";
const Section4 = () => {
  return (
    <>
      <div className="section4">
        <p className="social">Social Posts</p>
      </div>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </>
  );
};

export default Section4;

import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";

const Home = () => {
  return (
    <Box minHeight={"100vh"}>
      <HeroBanner />
      <Services />
    </Box>
  );
};

export default Home;

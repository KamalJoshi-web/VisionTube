import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Car1 from "../assets/herobanner/1.png";
import Car2 from "../assets/herobanner/2.jpg";
import Car3 from "../assets/herobanner/3.jpeg";
import Car4 from "../assets/herobanner/4.png";
import Car5 from "../assets/herobanner/5.jpeg";

const HeroBanner = () => {
  const carObjs = [
    { heading: "Future is Here", img: Car1 },
    { heading: "Watch Unlimited Videos", img: Car2 },
    { heading: "Mars is Waiting For Us", img: Car3 },
    { heading: "Nature's Beauty", img: Car4 },
    { heading: "Let's Build Community", img: Car5 },
  ];
  const HeadingStyles = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    padding: "16px",
    opacity: "50%",
    fontSize: "16px",
    borderRadius: "15px",
    letterSpacing: "3px",
  };
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {carObjs.map((item, index) => (
          <Box key={index} width={"100%"} maxHeight={"89.8vh"}>
            <img src={item.img} />
            <Typography bgcolor={"black"} color={"white"} sx={HeadingStyles}>
              {item.heading}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroBanner;

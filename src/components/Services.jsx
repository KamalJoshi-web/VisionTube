import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import ServiceIcon from "../assets/services/0.png";

const Services = () => {
  return (
    <Container maxWidth={"lg"} sx={{ padding: "16px" }}>
      <Typography
        textTransform={"uppercase"}
        width={"fit-content"}
        letterSpacing={5}
        my={5}
        sx={{
          fontSize: { lg: "5.5rem", md: "4.5rem", sm: "3rem", xs: "2rem" },
        }}
      >
        Services
      </Typography>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={ServiceIcon}
          sx={{ width: { lg: "35%", xs: "70%" } }}
        />
        <Typography
          letterSpacing={2}
          lineHeight={1.8}
          textAlign={"center"}
          sx={{ width: { lg: "50%", xs: "100%" } }}
        >
          VisionTube is a cutting-edge video streaming platform that offers an
          immersive and dynamic viewing experience. With a vast library of
          content spanning various genres, VisionTube brings together creators,
          artists, and enthusiasts from around the world. Discover captivating
          videos, engage with a passionate community, and explore a new
          dimension of entertainment. Whether you're seeking educational
          insights, thrilling adventures, or heartwarming stories, VisionTube
          provides a seamless interface to indulge your visual curiosity.
          Elevate your streaming journey with VisionTube and embark on a
          captivating exploration of the digital realm.
        </Typography>
      </Stack>
    </Container>
  );
};

export default Services;

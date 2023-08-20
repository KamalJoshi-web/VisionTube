import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {
  SendSharp,
  VideoChat,
  YouTube,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <Stack
        sx={{
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={2}
        minHeight={"20vh"}
        bgcolor={"black"}
        py={2}
      >
        {/* Community Btn */}
        <Stack>
          <Typography
            variant="h6"
            textTransform={"uppercase"}
            letterSpacing={2}
            mb={1.5}
            color={"whitesmoke"}
          >
            Join Our Community
          </Typography>
          <Stack flexDirection={"row"} gap={1.5}>
            <TextField
              placeholder="Email Address.."
              variant="standard"
              color="secondary"
              InputProps={{
                style: { color: "white", outlineColor: "whitesmoke" },
              }}
            />
            <Button sx={{ color: "white" }}>
              <SendSharp />
            </Button>
          </Stack>
        </Stack>
        {/* Website Detail */}
        <Stack
          sx={{
            borderLeft: {
              lg: "1px solid white",
              md: "1px solid white",
              sm: "none",
              xs: "none",
            },
            borderRight: {
              lg: "1px solid white",
              md: "1px solid white",
              sm: "none",
              xs: "none",
            },
          }}
          px={3}
          justifyContent={"center"}
        >
          <Typography
            variant="h5"
            marginLeft={1}
            fontWeight={"bold"}
            letterSpacing={1.2}
            component={Link}
            to="/"
            color={"whitesmoke"}
          >
            <VideoChat />
            {"   "}
            Vision<span style={{ color: "#f1807e " }}>Tube</span>
          </Typography>
          <Typography
            color={"GrayText"}
            textAlign={"center"}
            fontWeight={"bold"}
            letterSpacing={1.2}
            fontSize={12}
          >
            All Right Resevred
          </Typography>
        </Stack>
        {/* Social Handles */}
        <Stack>
          <Typography
            variant="h6"
            textTransform={"uppercase"}
            letterSpacing={2}
            mb={1.5}
            color={"whitesmoke"}
          >
            Social Handles
          </Typography>
          <Stack flexDirection={"row"}>
            <Button
              component={"a"}
              href="https://www.youtube.com/@ReactLearnerWeb/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <YouTube />
            </Button>
            <Button
              component={"a"}
              href="https://www.linkedin.com/in/kamal-joshi-a43738249"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </Button>
            <Button
              component={"a"}
              href="https://github.com/KamalJoshi-web?tab=repositories"
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHub />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

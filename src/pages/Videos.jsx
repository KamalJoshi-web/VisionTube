import { React, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

const Videos = () => {
  const videoDesc = [
    {
      src: "https://www.youtube.com/embed/r2U8YMjpLnE",
      title: "QR Code Component ",
    },
    {
      src: "https://www.youtube.com/embed/2KmSvKWNMhY",
      title: "Interactive Rating Component ",
    },
    {
      src: "https://www.youtube.com/embed/bHN65tbYqBw",
      title: "Newsletter ",
    },
    {
      src: "https://www.youtube.com/embed/WyRECWdHb14",
      title: "Age Calculator App ",
    },
    {
      src: "https://www.youtube.com/embed/KOTAEJJA18k",
      title: "Results Summary Component ",
    },
    {
      src: "https://www.youtube.com/embed/oPuaMcLRYdY",
      title: "Deploy Vite React App on GitHub in 5 Steps",
    },
    {
      src: "https://www.youtube.com/embed/FuyrvKpu15Q",
      title: "Intro Signup Form",
    },
    {
      src: "https://www.youtube.com/embed/hlzVC7Lmkcc",
      title: "Ping Coming Soon Page",
    },
  ];
  const [videoLink, setVideoLink] = useState(videoDesc[0].src);
  const [videoTitle, setVideoTitle] = useState(videoDesc[0].title);

  return (
    <Stack
      height={"100vh"}
      sx={{
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
      }}
      m={3}
    >
      {/* Videos */}
      <Stack width={"100%"}>
        {/* <video controls controlsList="nodownload" src=""></video> */}
        <iframe
          src={videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ width: "100%", height: "90%", display: "block" }}
        ></iframe>
        {/* Video Desc */}
        <Stack
          py={2}
          width={"100%"}
          maxHeight={"30vh"}
          sx={{ overflowY: "auto" }}
        >
          <Typography
            letterSpacing={1.5}
            sx={{
              fontSize: { lg: "4rem", md: "3.5rem", sm: "3rem", xs: "1.5rem" },
            }}
          >
            {" "}
            {videoTitle}
          </Typography>
          <Typography letterSpacing={1.5} lineHeight={1.5}>
            pariatur ea ullam deleniti provident sit! Impedit, eaque inventore
            natus obcaecati blanditiis exercitationem temporibus, id,
            perspiciatis doloribus enim suscipit et quisquam magnam hic aliquam
          </Typography>
        </Stack>
      </Stack>
      {/* SideVideos */}
      <Stack
        alignItems={"stretch"}
        p={4}
        gap={4}
        sx={{
          width: { lg: "30%", md: "30%", sm: "30%", xs: "100%" },
          overflowY: "auto",
        }}
      >
        {videoDesc.map((item, index) => (
          <Button
            key={index}
            color="secondary"
            onClick={() => {
              setVideoLink(item.src), setVideoTitle(item.title);
            }}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Videos;

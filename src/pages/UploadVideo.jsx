import React from "react";
import { Box, Container, Stack, TextField, Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";

const UploadVideo = () => {
  return (
    <Container maxWidth={"xl"} sx={{ height: "100vh" }}>
      <Stack
        height={"100%"}
        color={"violet"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <UploadFile
          sx={{ fontSize: { lg: "10rem", md: "8rem", sm: "6rem", xs: "5rem" } }}
        />
        <Box component={"form"}>
          <TextField
            required
            type="file"
            color="secondary"
            fullWidth
            sx={{ mb: "10px" }}
            InputProps={{}}
          />
          <Button
            type="submit"
            size="large"
            color="secondary"
            variant="contained"
            fullWidth
          >
            Upload
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default UploadVideo;

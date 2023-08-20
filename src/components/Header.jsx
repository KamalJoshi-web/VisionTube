import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  Stack,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import { VideoChat, LightMode, DarkMode } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = ({ mode, setMode }) => {
  const handleMode = () => {
    setMode(!mode);
  };
  const StylingBtn = {
    color: "whitesmoke",
    letterSpacing: "2px",
    fontSize: "13px",
    textTransform: "capitalize",
  };
  return (
    <AppBar color="secondary" position="static">
      <Stack
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        marginX={1.5}
        paddingY={2}
        sx={{ flexDirection: { lg: "row", sm: "column" } }}
      >
        {/* Logo */}
        <Box>
          <VideoChat />
          <Typography
            variant="h5"
            marginLeft={1}
            fontWeight={"bold"}
            letterSpacing={1.2}
            component={Link}
            to="/"
            color={"whitesmoke"}
          >
            Vision<span style={{ color: "#f1807e " }}>Tube</span>
          </Typography>
        </Box>
        {/* Pages */}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0.1}
        >
          <Button component={Link} to="/" sx={StylingBtn}>
            Home
          </Button>
          <Button component={Link} to="/videos" sx={StylingBtn}>
            Videos
          </Button>
          <Button component={Link} to="/uploadvideo" sx={StylingBtn}>
            Upload Video
          </Button>

          {/* Modes */}
          <Tooltip title="Modes" onClick={handleMode}>
            <IconButton>{mode ? <DarkMode /> : <LightMode />}</IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Header;

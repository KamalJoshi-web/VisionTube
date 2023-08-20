import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import UploadVideo from "./pages/UploadVideo";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/uploadvideo" element={<UploadVideo />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

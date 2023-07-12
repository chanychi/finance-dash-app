import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/scenes/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <NavBar />
          <Routes>
            <Route path="/" element={<div>dashboard page</div>} />
            <Route path="/predictions" element={<div>prediction page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </div>;
}

export default App

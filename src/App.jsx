import "./App.css";
import BottomBar from "./BottomBar";
import LeftBar from "./LeftBar";
import { Box, ThemeProvider } from "@mui/material";
import MiddleSection from "./MiddleSection";
import theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
          }}
        >
          <LeftBar />
          <BottomBar />
          <MiddleSection />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar } from "./components/form/Navbar";
import { useEffect, useState } from "react";
import { createTheme, Box, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#bbdefb",
    },
  },
});

function App() {
  const [user, setUser] = useState({
    name: "noName",
    id: "noId",
    tNumber: "noT",
  });

  useEffect(() => {
    //temp - should be get details from shraga
    setUser({ name: "דניאל ונטורה", id: "8599492", tNumber: "T87475544" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar {...user} />
      <Box sx={{ bgcolor: "secondary.main", minHeight: "93vh", minWidth: "90rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/createSurvey"
            element={<SurveyCreationPage />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

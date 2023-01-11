import "./App.css";
import { Route, Routes } from "react-router-dom";
import UnitPage from "./pages/unitPage/unitPage";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar } from "./components/form/Navbar";
import { useEffect, useState } from "react";
import { createTheme, Box, ThemeProvider } from "@mui/material";
import { AuthService } from "./services/authService";
import { useUser } from "./context/userContext";
import SubmitAnswerPage from "./pages/SubmitAnswerPage/SubmitAnswerPage";
import ResultPage from "./pages/resultPage/resultPage";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#bbdefb",
    },
  },
});

function App() {
  const { user, setNewUser } = useUser();

  const [auser, setaUser] = useState({
    name: "noName",
    tNumber: "noT",
  });

  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const initUser = async () => {
      const newUser = AuthService.getUser();
      if (user) {
        setNewUser(newUser);
        setIsLoadingUser(false);
        setaUser({
          name: newUser?.name.firstName + " " + newUser?.name.lastName,
          tNumber: newUser?.displayName.split("@")[0] as string,
        });
      }
    };

    initUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar {...auser} />
      <Box
        sx={{ bgcolor: "secondary.main", minHeight: "93vh", minWidth: "90rem" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createSurvey" element={<SurveyCreationPage />} />
          <Route path="/answerSurvey/:id" element={<SubmitAnswerPage />} />
          <Route path="/resultPage/:id" element={<ResultPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
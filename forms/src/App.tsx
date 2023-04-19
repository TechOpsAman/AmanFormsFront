import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar } from "./components/form/Navbar";
import { useEffect, useState } from "react";
import { createTheme, Box, ThemeProvider } from "@mui/material";
import { AuthService } from "./services/authService";
import { useUser } from "./context/userContext";
import SubmitAnswerPage from "./pages/SubmitAnswerPage/SubmitAnswerPage";
import ResultPage from "./pages/resultPage/resultPage";
import SurveySentSuccessfullyPage from "./pages/SurveySentSuccessfullyPage/SurveySentSuccessfullyPage";

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
    profilePic: ''
  });

  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const handleshareDialogOpen = (bool: boolean) => setShareDialogOpen(bool);

  const [surveyUrl, setSurveyUrl] = useState("");
  const [surveyCommentsUrl, setSurveyCommentsUrl] = useState("");

  useEffect(() => {
    if(surveyUrl) {
      const surveyCommentsUrl = surveyUrl.replace("answerSurvey", "resultPage");
      setSurveyCommentsUrl(surveyCommentsUrl);
    }
  }, [surveyUrl]);

  useEffect(() => {
    const initUser = async () => {
      const newUser = AuthService.getUser() as any;
      if (user) {
        setNewUser(newUser);
        setaUser({
          name: newUser?.name.firstName + " " + newUser?.name.lastName,
          tNumber: newUser?.displayName.split("@")[0] as string,
          profilePic: newUser?.photo as string,
        });
      }
    };

    initUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        {...auser}
        handleShareDialogOpen={handleshareDialogOpen}
        surveyUrl={surveyUrl}
        surveyCommentsUrl={surveyCommentsUrl}
      />
      <Box
        sx={{
          bgcolor: "secondary.main",
          minHeight: "93.1vh",
          minWidth: "90rem",
        }}
      >
        {auser.tNumber !== "noT" ? (
          <Routes>
            <Route path="/" element={<HomePage user={auser.tNumber} />} />
            <Route
              path="/createSurvey"
              element={
                <SurveyCreationPage
                  isOpen={shareDialogOpen}
                  setIsOpen={handleshareDialogOpen}
                  setSurveyUrl={setSurveyUrl}
                />
              }
            />
            <Route
              path="/answerSurvey/:id"
              element={<SubmitAnswerPage user={auser.tNumber} />}
            />
            <Route
              path="/surveySentSuccessfullyPage/:id"
              element={<SurveySentSuccessfullyPage />}
            />
            <Route path="/resultPage/:id" element={<ResultPage />} />
          </Routes>
        ) : (
          "טוען"
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;

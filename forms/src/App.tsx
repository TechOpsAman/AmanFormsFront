import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar } from "./components/form/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "a", id: "b", tNumber: "c" });

  useEffect(() => {
    //temp - should be get details from shraga
    setUser({ name: "דניאל ונטורה", id: "8599492", tNumber: "T87475544" });
  }, []);

  return (
    <>
      <Navbar {...user} isInCreateSurveyPage={true} />
      <div className="survey-creation-name-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/createSurvey"
            element={<SurveyCreationPage surveyName="" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

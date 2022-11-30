import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar } from "./components/form/Navbar";

function App() {
  return (
    <>
      <Navbar name='דניאל ונטורה' id='8599492' tNumber='T87475544'/>
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

import "./App.css";
import { Route, Routes } from "react-router-dom";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="survey-creation-name-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createSurvey" element={<SurveyCreationPage surveyName=''/>} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import UnitPage from "./pages/unitPage/unitPage";
import SurveyCreationPage from "./pages/SurveyCreationPage/SurveyCreationPage";

function App() {
  return (
    <div className="survey-creation-name-container">
      <Routes>
        <Route path="/createSurvey" element={<SurveyCreationPage surveyName=''/>} />
        <Route path="/surveyUnit" element={<UnitPage />} /> 
      </Routes>
    </div>
  );
}

export default App;

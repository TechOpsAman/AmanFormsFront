import "./App.css";
import { Route, Routes } from "react-router-dom";
import SubmitAnswerPage from "./pages/SubmitAnswerPage/SubmitAnswerPage";


function App() {
  return (
    <div className="survey-answers-name-container">
      <Routes>
        <Route path="/answerSurvey" element={<SubmitAnswerPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
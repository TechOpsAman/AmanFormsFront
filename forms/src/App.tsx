import "./App.css";
import { Route, Routes } from "react-router-dom";
import UnitPage from "./pages/unitPage/unitPage";


function App() {
  return (
    <div className="survey-answers-name-container">
      <Routes>
        <Route path="/surveyUnit" element={<UnitPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
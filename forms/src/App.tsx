import "./App.css";
import { Route, Routes } from "react-router-dom";
import CommentsQuestionPage from "./pages/CommentsQuestionPage/CommentsQuesionPage";

function App() {
  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route path="/" element={<CommentsQuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;

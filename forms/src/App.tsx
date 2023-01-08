import "./App.css";
import { Route, Routes } from "react-router-dom";
import CommentsQuesionPage from "./pages/CommentsQuestionPage/CommentsQuesionPage";

function App() {
  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route path="/commentsSummary/:id" element={<CommentsQuesionPage />} />
      </Routes>
    </div>
  );
}

export default App;

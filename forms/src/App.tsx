import "./App.css";
import { Route, Routes } from "react-router-dom";
import CommentsSummaryPage from "./pages/CommentsSummaryPage/CommentsSummaryPage";

function App() {
  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route path="/" element={<CommentsSummaryPage />} />
      </Routes>
    </div>
  );
}

export default App;

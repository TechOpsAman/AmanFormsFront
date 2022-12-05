import "./App.css";
import { useState } from "react";
import { IQuestion, QuestionType } from "./interfaces/iQuestion";
import { Route, Routes } from "react-router-dom";
import QuestionsAndPossibleAnswersSection from "./pages/questionPage/components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";
import QuestionChoosingSection from "./pages/questionPage/components/QuestionChoosingSection/QuestionChoosingSection";
import CommentsQuestionPage from "./pages/questionPage/CommentsQuesionPage";

function App() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([
    {
      id: "123456123456123456123456",
      questionName: "string",
      questionType: QuestionType.checkbox,
      answers: [
        { answer: "xaddadas" },
        { answer: "xaddadas" },
        { answer: "xaddadas" },
      ],
      selectedAnswers: [],
      mustAnswer: true,
    },
    {
      id: "654321654321654321654321",
      questionName: "boolean",
      questionType: QuestionType.checkbox,
      answers: [
        { answer: "xaddadas" },
        { answer: "xaddadas" },
        { answer: "xaddadas" },
      ],
      selectedAnswers: [],
      mustAnswer: false,
    },
  ]); // TODO: change to [] (empty array) and get date from DB.

  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route
          path="/2"
          element={
            <QuestionsAndPossibleAnswersSection questionList={questionList} />
          }
        />
        <Route
          path="/1"
          element={<QuestionChoosingSection questionList={questionList} />}
        />
        <Route
          path="/"
          element={<CommentsQuestionPage questionList={questionList} />}
        />
      </Routes>
    </div>
  );
}

export default App;

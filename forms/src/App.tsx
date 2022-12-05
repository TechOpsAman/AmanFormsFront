import "./App.css";
import { useState } from "react";
import { IQuestion, QuestionType } from "./interfaces/iQuestion";
import { Route, Routes } from "react-router-dom";
import QuestionChoosingByIndexSection from "./pages/questionPage/components/QuestionChoosingSection/QuestionChoosingByIndexSection/QuestionChoosingByIndexSection";
import QuestionChoosingByNameSection from "./pages/questionPage/components/QuestionChoosingSection/QuestionChoosingByNameSection/QuestionChoosingByNameSection";
import QuestionsAndPossibleAnswersSection from "./pages/questionPage/components/QuestionsAndPossibleAnswersSection/QuestionsAndPossibleAnswersSection";

function App() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([
    {
      id: "123456123456123456123456",
      questionName: "string",
      questionType: QuestionType.select,
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
      questionType: QuestionType.select,
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
          path="/"
          element={
            <QuestionChoosingByIndexSection questionList={questionList} />
          }
        />
        <Route
          path="/1"
          element={
            <QuestionChoosingByNameSection questionList={questionList} />
          }
        />
        <Route
          path="/2"
          element={
            <QuestionsAndPossibleAnswersSection questionList={questionList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

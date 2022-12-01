import "./App.css";
import { useState } from "react";
import { IQuestion, QuestionType } from "./interfaces/iQuestion";
import { Route, Routes } from "react-router-dom";
import SelectQuestionByIndex from "./pages/questionPage/components/QuestionChoosingByIndexSection/SelectQuestionByIndex";
import SelectQuestionByName from "./pages/questionPage/components/QuestionChoosingByNameSection/SelectQuestionByName";

function App() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([
    {
      id: "123456123456123456123456",
      questionName: "string",
      questionType: QuestionType.select,
      answers: [],
      selectedAnswers: [],
      mustAnswer: true,
    },
  ]); // TODO: change to [] (empty array)

  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route
          path="/"
          element={
            <SelectQuestionByIndex
              questionList={questionList}
              setQuestionList={setQuestionList}
            />
          }
        />
        <Route
          path="/hi"
          element={
            <SelectQuestionByName
              questionList={questionList}
              setQuestionList={setQuestionList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

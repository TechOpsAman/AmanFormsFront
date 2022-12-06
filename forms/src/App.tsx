import "./App.css";
import { useState } from "react";
import { IQuestion, QuestionType } from "./interfaces/questions/iQuestion";
import { Route, Routes } from "react-router-dom";
import CommentsQuestionPage from "./pages/questionPage/CommentsQuesionPage";
import { ISurvey } from "./interfaces/answers/iSurvey";

function App() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([
    {
      id: "123456123456123456123456",
      questionName: "string",
      questionType: QuestionType.radio,
      required: true,
      answers: [
        { answer: "xaddadas" },
        { answer: "xaddadas" },
        { answer: "xaddadas" },
      ],
    },
    {
      id: "654321654321654321654321",
      questionName: "boolean",
      questionType: QuestionType.checkbox,
      required: true,
      answers: [
        { answer: "11111" },
        { answer: "111111" },
        { answer: "111111" },
      ],
    },
  ]); // TODO: change to [] (empty array) and get date from DB.

  // TODO: add fictional values in order to check UI!!!
  //                                                 ||
  //                                                 ||
  //                                                \  /
  //                                                 \/
  const [answerList, setAnswerList] = useState<ISurvey[]>([]); // TODO: change to [] (empty array) and get date from DB.

  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route
          path="/"
          element={<CommentsQuestionPage questionList={questionList} />}
        />
      </Routes>
    </div>
  );
}

export default App;

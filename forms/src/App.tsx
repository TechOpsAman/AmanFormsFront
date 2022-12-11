import "./App.css";
import { useEffect, useState } from "react";
import { IQuestion, QuestionType } from "./interfaces/questions/iQuestion";
import { Route, Routes } from "react-router-dom";
import CommentsQuestionPage from "./pages/questionPage/CommentsQuesionPage";
import { ISurveyAnswers } from "./interfaces/answers/iSurvey";
import CompositorService from "./services/compositor.service";
import { ISurveyQuestions } from "./interfaces/questions/iSurvey";

function App() {
  const [questionList, setQuestionList] = useState<IQuestion[]>([
    // {
    //   id: "123456123456123456123456",
    //   questionName: "string",
    //   questionType: QuestionType.radio,
    //   required: true,
    //   answers: [
    //     { answer: "xadddsfsgadas" },
    //     { answer: "xaddadassdfsg" },
    //     { answer: "xaddadasert" },
    //   ],
    // },
  ]);
  const [answerList, setAnswerList] = useState<ISurveyAnswers[]>([
    // {
    //   surveyId: "111111111111111111111111",
    //   userId: "121212121212121212121212",
    //   content: [
    //     {
    //       questionName: "string",
    //       questionType: QuestionType.radio,
    //       required: true,
    //       answers: ["xaddadasert"],
    //     },
    //     {
    //       questionName: "boolean",
    //       questionType: QuestionType.checkbox,
    //       required: true,
    //       answers: ["11111", "1111111", "11111111", "111111111"],
    //     },
    //   ],
    // },
  ]);

  const surveyId: string = "6395e7bc9821e79971898be3";

  const fetchData = async () => {
    const surveyQuestionsAndUsersAnswers =
      await CompositorService.getSurveyQuestionsAndUsersAnswers(surveyId);
    setQuestionList(
      (surveyQuestionsAndUsersAnswers[0] as ISurveyQuestions).content
    );

    setAnswerList(surveyQuestionsAndUsersAnswers[1] as ISurveyAnswers[]);
  };

  useEffect(() => {
    console.log("hi");
    fetchData();
  }, []);

  //   [
  //   {
  //     id: "123456123456123456123456",
  //     questionName: "string",
  //     questionType: QuestionType.radio,
  //     required: true,
  //     answers: [
  //       { answer: "xadddsfsgadas" },
  //       { answer: "xaddadassdfsg" },
  //       { answer: "xaddadasert" },
  //     ],
  //   },
  //   {
  //     id: "654321654321654321654321",
  //     questionName: "boolean",
  //     questionType: QuestionType.checkbox,
  //     required: true,
  //     answers: [
  //       { answer: "11111" },
  //       { answer: "111111" },
  //       { answer: "1111111" },
  //     ],
  //   },
  // ]); // TODO: change to [] (empty array) and get date from DB.

  // TODO: add fictional values in order to check UI!!!
  //                                                 ||
  //                                                 ||
  //                                                \  /
  //                                                 \/
  // const [answerList, setAnswerList] = useState<ISurveyAnswers[]>([
  //   {
  //     surveyId: "111111111111111111111111",
  //     userId: "121212121212121212121212",
  //     content: [
  //       {
  //         questionName: "string",
  //         questionType: QuestionType.radio,
  //         required: true,
  //         answers: ["xaddadasert"],
  //       },
  //       {
  //         questionName: "boolean",
  //         questionType: QuestionType.checkbox,
  //         required: true,
  //         answers: ["11111", "1111111", "11111111", "111111111"],
  //       },
  //     ],
  //   },
  // ]); // TODO: change to [] (empty array) and get date from DB.

  return (
    <div className="comments-question-page-container">
      <Routes>
        <Route
          path="/"
          element={
            <CommentsQuestionPage
              questionList={questionList}
              answerList={answerList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

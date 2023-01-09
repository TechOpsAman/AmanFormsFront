import "./SubmitAnswerPage.scss";
import React, { useEffect, useState } from "react";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerSection";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import QuestionService from "../../services/questionService";
import { useLocation } from "react-router-dom";

function SurveyCreationPage() {
  const location = useLocation();
  const [answerAndQuestions, setAnswerAndQuestions] =
    useState<ISurveyQuestions>();

  const surveyId: string = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const temp = await QuestionService.getSurveyQuestions(surveyId);
      setAnswerAndQuestions(temp as ISurveyQuestions);
    };

    fetchData();
  }, []);

  return (
    <div className="survey-submit-answer-container">
      {answerAndQuestions ? (
        <AnswerType
          questionsAndAnswers={
            answerAndQuestions as unknown as ISurveyQuestions
          }
        />
      ) : (
        "Error"
      )}
    </div>
  );
}

export default SurveyCreationPage;

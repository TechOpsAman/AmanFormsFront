import React, { useEffect, useState } from "react";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerSection"
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import QuestionService from "../../services/questionService";



function SurveyCreationPage() {

  const [answerAndQuestions, setAnswerAndQuestions] = useState<ISurveyQuestions>();

  const surveyId: string = "639ed36905ed101ac1992f5f";

  useEffect(() => {
    const fetchData = async () => {
      const temp = await QuestionService.getSurveyQuestions(
        surveyId
      );
      setAnswerAndQuestions(temp as ISurveyQuestions);
    };

    fetchData();
  }, []);

  
  return (
    <div className="survey-creation-page-container" >
      {answerAndQuestions? 
      <AnswerType questionsAndAnswers={answerAndQuestions as unknown as ISurveyQuestions} /> : 'a'}
    </div>
  );
}

export default SurveyCreationPage;


import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useEffect, useState } from "react";
import { IQuestion, QuestionType } from "../../interfaces/questions/iQuestion";
import { ISurveyQuestions } from "../../interfaces/questions/iSurvey";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import CompositorService from "../../services/questionService";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";

function UnitPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<ISurveyAnswers[]>([]);
  const [answerAndQuestions, setAnswerAndQuestions] = useState<ISurveyQuestions>();

  const surveyId: string = "6395e7bc9821e79971898be3";
  

  useEffect(() => {
    const fetchData = async () => {
      const temp = await CompositorService.getSurveyQuestionsAndUsersAnswers(
        surveyId
      );
      setAnswerAndQuestions(temp[0] as ISurveyQuestions);
      setSelectedAnswers(temp[1] as ISurveyAnswers[]);
    };

    fetchData();
  }, []);

  
  return (
    <div>
      <ScrollPages
        questionsAndAnswers={selectedAnswers}
        survey={answerAndQuestions as ISurveyQuestions}
      />
    </div>
  );
}

export default UnitPage;

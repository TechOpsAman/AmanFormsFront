import React, { useState } from "react";
import { iSurveyQuestions } from "../../interfaces/iSurveyQuestions";
import AnswerType from "./components/form/AnswerType/AnswerType";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";

function UnitPage() {
  const [sections, setSections] = useState([
    {
      surveyId: "111111111111111111111131",
      userId: "111111111111111111111016",
      content: [ 
        {
          questionId: "88",
          required: true,
          answers: ["1", "2"],
          createdAt: "2022-11-29T21:45:01.500Z",
          id: "63867d5d3f5238b263b6b99f",
        },
      ],
      createdAt: "2022-11-29T21:45:01.501Z",
      id: "63867d5d3f5238b263b6b99e",
    },
    {
      surveyId: "111111111111111111111131",
      userId: "111111111111111111111116",
      content: [
        {
          questionId: "123",
          required: true,
          answers: ["1", "2"],
          createdAt: "2022-11-29T12:56:22.588Z",
          id: "63860176a3043f5b7355a97b",
        },
        {
            questionId: "11111",
            required: true,
            answers: ["1"],
            createdAt: "2022-11-29T12:56:22.588Z",
            id: "63860176a3043f5b7355a97b",
          },
      ],
      createdAt: "2022-11-29T12:56:22.589Z",
      id: "63860176a3043f5b7355a97a",
    },
  ]);

  return (
    <div>
      <ScrollPages questionsAndAnswers={sections as unknown as iSurveyQuestions[]} />
    </div> 
  );
}

export default UnitPage;

import React, { useState } from "react";
import { iSurvey } from "../../interfaces/iSurvey";
import { iSurveyQuestions } from "../../interfaces/iSurveyQuestions";
import ScrollPages from "./components/form/ScrollPges/ScrollPages1";

function UnitPage() {
  const [sections, setSections] = useState([
    {
      surveyId: "111111111111111111111131",
      userId: "111111111111111111111016",
      content: [
        {
          questionId: "123456a123456a12346abcd",
          questionName: "הכל טוב?",
          questionType: "select",
          required: true,
          answers: ["123412341234123412341234"],
          createdAt: "2022-11-29T21:45:01.500Z",
          id: "63867d5d3f5238b263b6b99f",
        },
        {
          questionId: "123456a123456a1234abcde",
          questionName: "הכל בסדר?",
          questionType: "radio",
          required: true,
          answers: ["12341234123412341234abab"],
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
          questionId: "123456a123456a123abcdef",
          questionName: "שאלת תשובה קצרה",
          questionType: "shortAnswer",
          required: true,
          answers: ["1234123412341234123412ab"],
          createdAt: "2022-11-29T12:56:22.588Z",
          id: "63860176a3043f5b7355a97b",
        },
        {
          questionId: "123456a123456a1234abcde",
          questionName: "הייי",
          questionType: "checkbox",
          required: true,
          answers: ["12341234123412341234abab", "1234123412341234abababab"],
          createdAt: "2022-11-29T12:56:22.588Z",
          id: "63860176a3043f5b7355a97b",
        },
      ],
      createdAt: "2022-11-29T12:56:22.589Z",
      id: "63860176a3043f5b7355a97a",
    },
  ]);

  const [sections2, setSections2] = React.useState({
    surveyName: "בדיקה",
    creatorId: "123456123456123456123456",
    content: [
      {
        questionName: "הכל טוב?",
        questionType: "select",
        answers: [
          {
            answer: "כן",
            id: "123412341234123412341234",
          },
          {
            answer: "לא",
            id: "12341234123412341234123a",
          },
        ],
        id: "123456a123456a12346abcd",
      },
      {
        questionName: "הכל בסדר?",
        questionType: "radio",
        answers: [
          {
            answer: "בטח",
            id: "1234123412341234123412ab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
        ],
        id: "123456a123456a1234abcde",
      },
      {
        questionName: "הייי",
        questionType: "checkbox",
        answers: [
          {
            answer: "בטח",
            id: "1234123412341234123412ab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
          {
            answer: "כן",
            id: "123412341234123412ababab",
          },
          {
            answer: "לאאא",
            id: "1234123412341234abababab",
          },
        ],
        id: "123456a123456a123abcdef",
      },
      {
        questionName: "שאלת תשובה קצרה",
        questionType: "shortAnswer",
        answers: [
          {
            answer: "בטח",
            id: "1234123412341234123412ab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
        ],
        id: "123456a123456a12abcdefg",
      },
      {
        questionName: "תשובה ארוכה?",
        questionType: "longAnswer",
        answers: [
          {
            answer: "בטח",
            id: "1234123412341234123412ab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
          {
            answer: "לא",
            id: "12341234123412341234abab",
          },
        ],
        id: "123456a123456a1abcdefgh",
      },
    ],
    createdAt: "2022-11-16T07:14:19.196Z",
    id: "111111111111111111111131",
  });

  return (
    <div>
      <ScrollPages
        questionsAndAnswers={sections as unknown as iSurveyQuestions[]}
        survey={sections2 as unknown as iSurvey}
      />
    </div>
  );
}

export default UnitPage;

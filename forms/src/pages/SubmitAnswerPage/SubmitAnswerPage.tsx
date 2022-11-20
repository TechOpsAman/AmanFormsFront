//import DropDown from "../../components/form/DropDown";
//import SurveySection from "./components/form/SurveySection/SurveySection";
//import SurveyTitle from "./components/form/SurveyTitle/SurveyTitle";
import { useState } from "react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { isPropertySignature } from "typescript";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerType"
import { iSurveyQuestions } from "../../interfaces/iSurvey";


function SurveyCreationPage() {

  const [sections, setSections] = React.useState(
    {
      surveyName: "בדיקה",
      creatorId: "123456123456123456123456",
      content: [
        {
          "questionName": "הכל טוב?",
          "questionType": "select",
          "answers": [     
            {
              "answer": "כן",
              "id": "123412341234123412341234"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234123a"
            }
          ],
          "id": "123456a123456a12346abcd"
        },
        {
          "questionName": "הכל בסדר?",
          "questionType": "radio",
          "answers": [
            {
              "answer": "בטח",
              "id": "1234123412341234123412ab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            }
          ],
          "id": "123456a123456a1234abcde"
        }
      ],
      createdAt: "2022-11-16T07:14:19.196Z",
      id: "63748dcbecfe357a155cbee3"
    }
  );

  return (
    <div className="survey-creation-page-container" >
      <AnswerType questionsAndAnswers={sections as unknown as iSurveyQuestions} handleSubmit={setSections as any} />
    </div>
  );
}

export default SurveyCreationPage;


import React from "react";
import { iSurveyQuestions } from "../../interfaces/iSurveyQuestions";
import AnswerType from "./components/form/surveyAnswer/answer/AnswerSection"



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
        },
        {
          "questionName": "הייי",
          "questionType": "checkbox",
          "answers": [
            {
              "answer": "בטח",
              "id": "1234123412341234123412ab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            },
            {
              "answer": "כן",
              "id": "123412341234123412ababab"
            },
            {
              "answer": "לאאא",
              "id": "1234123412341234abababab"
            }
          ],
          "id": "123456a123456a123abcdef"
        },
        {
          "questionName": "שאלת תשובה קצרה",
          "questionType": "shortAnswer",
          "answers": [
            {
              "answer": "בטח",
              "id": "1234123412341234123412ab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            }
          ],
          "id": "123456a123456a12abcdefg"
        },
        {
          "questionName": "תשובה ארוכה?",
          "questionType": "longAnswer",
          "answers": [
            {
              "answer": "בטח",
              "id": "1234123412341234123412ab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            },
            {
              "answer": "לא",
              "id": "12341234123412341234abab"
            }
          ],
          "id": "123456a123456a1abcdefgh"
        }
      ],
      createdAt: "2022-11-16T07:14:19.196Z",
      id: "63748dcbecfe357a155cbee3"
    }
  );

  return (
    <div className="survey-creation-page-container" >
      <AnswerType questionsAndAnswers={sections as unknown as iSurveyQuestions} />
    </div>
  );
}

export default SurveyCreationPage;


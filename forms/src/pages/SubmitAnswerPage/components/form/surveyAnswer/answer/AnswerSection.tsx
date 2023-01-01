import "./AnswerSection.scss";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { ISurveyAnswers } from "../../../../../../interfaces/answers/iSurvey";
import {
  ISection,
  QuestionType,
} from "../../../../../../interfaces/answers/iSection";
import CheckboxAnswer from "../../AnswerType/CheckboxAnswer/CheckboxAnswer";
import LongAnswer from "../../AnswerType/LongAnswer/LongAnswer";
import RadioAnswer from "../../AnswerType/RadioAnswer/RadioAnswer";
import SelectAnswer from "../../AnswerType/SelectAnswer/SelectAnswer";
import ShortAnswer from "../../AnswerType/ShortAnswer/ShortAnswer";
import { AnswerContext } from "../../../../../../context/sectionContext";
import { ISurveyQuestions } from "../../../../../../interfaces/questions/iSurvey";
import RtlProvider from "../../../../../../components/forms/RtlProvider";

function AnswerType({
  questionsAndAnswers,
}: {
  questionsAndAnswers: ISurveyQuestions;
}) {

  console.log(questionsAndAnswers)

  const [survey, setSurvey] = useState<ISurveyAnswers>({
    surveyId: "",
    userId: "",
    content: [],
  });

  const handleAnswers = (
    type: string,
    answers: string[],
    questionIndex: number
  ) => {
    switch (type) {
      case QuestionType.checkbox:
        return (
          <div className="survey-answer-type_answers_div">
            {
              <CheckboxAnswer
                answers={answers as any}
                questionIndex={questionIndex as number}
              />
            }
          </div>
        );

      case QuestionType.radio:
        return (
          <div className="survey-answer-type_answers_div">
            <RadioAnswer
              answers={answers as string[]}
              questionIndex={questionIndex as number}
            />
          </div>
        );

      case "SHORTANSWER":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <ShortAnswer questionIndex={questionIndex as number} />
          </div>
        );

      case "LONGANSWER":
        return (
          <div dir="rtl">
            <LongAnswer questionIndex={questionIndex as number} />
          </div>
        );

      case QuestionType.select:
        return (
          <div className="survey-answer-type_answers_div">
            <RtlProvider>
              <SelectAnswer
                answers={answers as string[]}
                questionIndex={questionIndex as number}
              />
            </RtlProvider>
          </div>
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const surveyInit = () => {
      const temp: ISection[] = [];
      questionsAndAnswers.content.map((question) =>
        temp.push({
          questionName: question.questionName,
          questionType: question.questionType,
          required: question.required,
          answers: [],
        })
      );
      setSurvey({
        surveyId: questionsAndAnswers.id as string,
        userId: "123421342134213421342134",
        content: temp,
      });
    };

    surveyInit();
  }, []);

  return (
    <div>
      <Box className="survey-answer-type_survey_titel">
        <h3>{questionsAndAnswers.surveyName}</h3>
      </Box>
      {questionsAndAnswers.content.map((questions: any, i: number) => {
        return (
          <RtlProvider>
            <Box
              className="survey-answer-type_questions_div"
              key={`survey${i}`}
            >
              <AnswerContext.Provider value={survey}>
                <h3 className="survey-answer-type_question_name">
                  {questions.questionName}
                </h3>
                {handleAnswers(
                  questions.questionType.toUpperCase(),
                  questions.answers,
                  i
                )}
              </AnswerContext.Provider>
            </Box>
          </RtlProvider>
        );
      })}
    </div>
  );
}

export default AnswerType;

import "./AnswerSection.scss";
import { Box, Button, Typography } from "@material-ui/core";
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
import AnswerService from "../../../../../../services/answerService";

function AnswerType({
  questionsAndAnswers,
}: {
  questionsAndAnswers: ISurveyQuestions;
}) {
  const [currAnswers, setCurrAnswers] = useState<string[][]>(
    new Array(questionsAndAnswers.content.length).fill([])
  );

  const [flag, setFlag] = useState(false);

  const [isAllRequiredAnsewred, setIsAllRequiredAnsewred] = useState(false);

  const [survey, setSurvey] = useState<ISurveyAnswers>({
    surveyId: "",
    userId: "",
    content: [],
  });

  const postSurveyData = (survey: ISurveyAnswers) => {
    AnswerService.postAnswerSurvey(survey);
  };

  const handleAnswers = (
    type: string,
    answers: string[],
    questionIndex: number
  ) => {
    switch (type) {
      case QuestionType.checkbox:
        return (
          <div className="survey-answer-type_answers_div">
            <CheckboxAnswer
              answers={answers as any}
              questionIndex={questionIndex as number}
              currAnswers={currAnswers}
              setCurrAnswers={setCurrAnswers}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        );

      case QuestionType.radio:
        return (
          <div className="survey-answer-type_answers_div">
            <RadioAnswer
              answers={answers as string[]}
              questionIndex={questionIndex as number}
              currAnswers={currAnswers}
              setCurrAnswers={setCurrAnswers}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        );

      case QuestionType.shortAnswer:
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <ShortAnswer
              questionIndex={questionIndex as number}
              currAnswers={currAnswers}
              setCurrAnswers={setCurrAnswers}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        );

      case QuestionType.longAnswer:
        return (
          <div dir="rtl">
            <LongAnswer
              questionIndex={questionIndex as number}
              currAnswers={currAnswers}
              setCurrAnswers={setCurrAnswers}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        );

      case QuestionType.select:
        return (
          <div className="survey-answer-type_answers_div">
            <SelectAnswer
              answers={answers as string[]}
              questionIndex={questionIndex as number}
              currAnswers={currAnswers}
              setCurrAnswers={setCurrAnswers}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        );
      default:
        return <></>;
    }
  };

  const checkAllRequirments = () => {
    let allRequiredAnswered = true;

    questionsAndAnswers.content.forEach((question, index) => {
      if (
        (question.required && currAnswers[index].length === 0) ||
        currAnswers[index][0]?.length === 0
      ) {
        allRequiredAnswered = false;
      }
    });

    setIsAllRequiredAnsewred(allRequiredAnswered);
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

  useEffect(() => {
    checkAllRequirments();
  }, [flag]);

  return (
    <div>
      {survey?.content.length > 0 && (
        <div>
          <RtlProvider>
            <Box className="survey-answer-type_survey_titel">
              <Typography variant="h4">
                {questionsAndAnswers.surveyName}
              </Typography>
              <Typography variant="h6">
                {questionsAndAnswers.surveyDescription}
              </Typography>
            </Box>
          </RtlProvider>
          {questionsAndAnswers.content.map((question: any, i: number) => {
            return (
              <RtlProvider key={i}>
                {console.log(
                  question.required &&
                    question.questionType !== "TITLE" &&
                    currAnswers[i].length > 0 &&
                    currAnswers[i][0]
                )}
                <Box
                  className={
                    question.required
                      ? question.questionType !== "TITLE" &&
                        currAnswers[i].length > 0 &&
                        currAnswers[i][0]
                        ? "survey-answer-type_questions_div"
                        : "survey-answer-type_questions_div_required"
                      : "survey-answer-type_questions_div"
                  }
                >
                  <AnswerContext.Provider value={survey}>
                    {question.required ? (
                      <Box className="survey-answer-type_question_name">
                        <h3>{question.questionName}</h3>
                        <h4 className="survey-answer-type_required_asterisk">
                          {"*"}
                        </h4>
                      </Box>
                    ) : (
                      <h3 className="survey-answer-type_question_name">
                        {question.questionName}
                      </h3>
                    )}
                    {handleAnswers(question.questionType, question.answers, i)}
                  </AnswerContext.Provider>
                </Box>
              </RtlProvider>
            );
          })}
          <Box dir="rtl">
            <Button
              variant="contained"
              onClick={() => postSurveyData(survey)}
              disabled={!isAllRequiredAnsewred}
            >
              הבא
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}

export default AnswerType;

import "./AnswerSection.scss";
import { Box } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { iSurvey, iSurveyQuestions } from "../../../../../../interfaces/iSurvey";
import { iSection, QuestionType } from "../../../../../../interfaces/iSection";
import CheckboxAnswer from "../../AnswerType/CheckboxAnswer/CheckboxAnswer";
import LongAnswer from "../../AnswerType/LongAnswer/LongAnswer";
import RadioAnswer from "../../AnswerType/RadioAnswer/RadioAnswer";
import SelectAnswer from "../../AnswerType/SelectAnswer/SelectAnswer";
import ShortAnswer from "../../AnswerType/ShortAnswer/ShortAnswer";
import { AnswerContext } from "../../../../../../context/sectionContext";

function AnswerType(props: { questionsAndAnswers: iSurveyQuestions }) {
  const [survey, setSurvey] = useState<iSurvey>({ surveyId: '', userId: '', content: [] }); // TODO: too many commments!!!

  const handleAnswers = (type: string, answers: string[], questionIndex: number) => {
    switch (type) {
      case "checkbox":
        return (<div className="survey-answer-type_answers_div">{
          <CheckboxAnswer answers={answers as any} questionIndex={questionIndex as number} />
        }</div>)

      case "radio":
        return (<div className="survey-answer-type_answers_div">
          {
            <RadioAnswer answers={answers as string[]} questionIndex={questionIndex as number} type={type as QuestionType}/>
          }

        </div>)


      case "shortAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <ShortAnswer questionIndex={questionIndex as number}/>
          </div>
        );

      case "longAnswer":
        return (
          <div dir="rtl">
            <LongAnswer questionIndex={questionIndex as number}/>
          </div>

        )

      case "select":
        return (<div className="survey-answer-type_answers_div">
          {
            <SelectAnswer answers={answers as string[]} questionIndex={questionIndex as number}/>
          } </div >)
      default:
        return <></>;
    }
  }

  useEffect(() => {
    const surveyInit = () => {
      const temp: iSection[] = [];
      props.questionsAndAnswers.content.map((question) => temp.push({ questionId: question.id as string, answers: [] }))
      setSurvey({ surveyId: props.questionsAndAnswers.id, userId: '123421342134213421342134', content: temp }); // TODO: do'nt use real values!!!
    }

    surveyInit();

  }, []);

  return (
    <div>

      {props.questionsAndAnswers.content.map((questions: any, i: number) => {
        return <Box className="survey-answer-type_questions_div" key={`surveyבםמדא${i}`}> 
          <AnswerContext.Provider value={survey}>
            <h3>{questions.questionName}</h3>
            {handleAnswers(questions.questionType, questions.answers, i)}
          </AnswerContext.Provider>
        </Box>
      })}
    </div>
  )


}

export default AnswerType;
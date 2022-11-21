import "./AnswerType.scss";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from "@mui/material";
import { iSurvey, iSurveyQuestions } from "../../../../../../interfaces/iSurvey";
import { Answer, iSection, QuestionType } from "../../../../../../interfaces/iSection";


function AnswerType(props: { questionsAndAnswers: iSurveyQuestions }) {

  const [currAnswers, setCurrAnswers] = useState(['','','']);
  const [survey, setSurvey] = useState<iSurvey>({ surveyId: '', userId: '', content: [] });


  const updateAnswer = (answers: string, questionIndex: number, questionType: QuestionType) => {
    const tempArr = survey;

    if (questionType === QuestionType.shortAnswer || questionType === QuestionType.longAnswer) {
      if (tempArr.content[questionIndex].answers.length === 0 || !tempArr.content[questionIndex].answers[0]) tempArr.content[questionIndex].answers = [answers];
      else tempArr.content[questionIndex].answers = [tempArr.content[questionIndex].answers[0] + answers];
    }
    else {
      tempArr.content[questionIndex].answers = [answers];
    }
    setSurvey(tempArr);
  }

  const updateCheckboxAnswer = (answer: string, questionIndex: number) => {
    const tempArr = survey;

    if (tempArr.content[questionIndex].answers.includes(answer)) {
      const index = tempArr.content[questionIndex].answers.indexOf(answer);
      tempArr.content[questionIndex].answers.splice(index, 1);
    } else {
      tempArr.content[questionIndex].answers.push(answer);
    }
    setSurvey(tempArr);
  }

  const handleChange = (event: SelectChangeEvent, questionIndex: number, type: QuestionType) => {
    updateAnswer(event.target.value, questionIndex, type as QuestionType);
  };


  const handleAnswers = (type: string, answers: string[], questionIndex: number) => {
    switch (type) {
      case "checkbox":
        return (<div className="survey-answer-type_answers_div">{
          answers.map((element: any, answerIndex: number) => {
            return (
              <FormControlLabel
                key={answerIndex}
                value={element.answer}
                onChange={(event) => {
                  updateCheckboxAnswer((event.target as HTMLInputElement).value, questionIndex);
                }}
                control={<Checkbox color="primary" />}
                label={element.answer}
                labelPlacement="start" />
            )
          })


        }</div>)

      case "radio":
        return (<div className="survey-answer-type_answers_div">{
          <RadioGroup>{
            answers.map((element: any, index: number) => {
              return (
                <FormControlLabel
                  key={`radio-${index}`}
                  value={element.answer}
                  onClick={(event) => {
                    updateAnswer((event.target as HTMLInputElement).value, questionIndex, type as QuestionType);
                  }}
                  control={<Radio color="primary" />}
                  label={element.answer}
                  labelPlacement="start"
                />
              )
            })
          } </RadioGroup>}</div>)


      case "shortAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <TextareaAutosize
              className="survey-answer-type_short_answer"
              maxLength={70}
              minRows={1}
              value={currAnswers[0]}
              onChange={(e) => {
                updateAnswer(e.target.value, questionIndex, type as QuestionType);
                const temp = currAnswers;
                  currAnswers[0] = e.target.value as string;
                  setCurrAnswers(temp);
              }}
            />
          </div>
        );

      case "longAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <TextareaAutosize
              className="survey-answer-type_long_answer"
              maxLength={1000}
              minRows={4}
              value={currAnswers[1]}
              onChange={(e) => {
                updateAnswer(e.target.value, questionIndex, type as QuestionType);
                const temp = currAnswers;
                  currAnswers[1] = e.target.value as string;
                  setCurrAnswers(temp);
              }}
            />
          </div>

        )

      case "select":
        return (<div className="survey-answer-type_answers_div">
          {
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
              <Select
                className="survey-answer-type_select_answer"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currAnswers[2]}
                onChange={(e) => {
                  handleChange(e as SelectChangeEvent, questionIndex, type as QuestionType);
                  const temp = currAnswers;
                  console.log(currAnswers[2]);
                  currAnswers[2] = e.target.value as string;
                  setCurrAnswers(temp);
                }}
                label="select"
              >
                {
                  answers.map((element: any, index: number) => {
                    return (
                      < MenuItem value={element.answer} key={index}> {element.answer} </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
          } </div >)
      default:
        return <></>;
    }
  }

  useEffect(() => {
    const surveyInit = () => {
      const temp: iSection[] = [];
      props.questionsAndAnswers.content.map((question) => temp.push({ questionId: question.id as string, answers: [] }))
      setSurvey({ surveyId: props.questionsAndAnswers.id, userId: '123421342134213421342134', content: temp });
    }

    surveyInit();

  }, []);

  return (
    <div>
      {props.questionsAndAnswers.content.map((questions: any, i: number) => {
        return <Box className="survey-answer-type_questions_div" key={`surveyבםמדא${i}`}>
          <h3>{questions.questionName}</h3>
          {handleAnswers(questions.questionType, questions.answers, i)}
        </Box>
      })}
    </div>
  )


}

export default AnswerType;
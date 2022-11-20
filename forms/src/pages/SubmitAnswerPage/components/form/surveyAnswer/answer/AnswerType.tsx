import "./AnswerType.scss";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from "@mui/material";
import ReactDOM from "react-dom";
import { iSurvey, iSurveyQuestions } from "../../../../../../interfaces/iSurvey";
import { Answer, iSection } from "../../../../../../interfaces/iSection";

function AnswerType(props: { questionsAndAnswers: iSurveyQuestions, handleSubmit: any }) {
  const [shortAnswer, setShortAnswer] = useState('');
  const [longAnswer, setLongAnswer] = useState('');
  const [select, setSelect] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const [radio, setRadio] = useState('');

  const [survey, setSurvey] = useState<iSurvey>({ surveyId: '', userId: '', content: [] });



  const updateAnswer = (answers: string[], questionIndex: number) => {
    const tempArr = survey;
    tempArr.content[questionIndex].answers = answers;
    console.log(answers);
  }

  const handleChange = (event: SelectChangeEvent, questionIndex: number) => {
    setSelect(event.target.value);
    updateAnswer([event.target.value], questionIndex);
  };

  const handleAnswers = (type: string, answers: any, questionIndex: number) => {
    switch (type) {
      case "checkbox":
        return (<div className="survey-answer-type_answers_div">{
          answers.map((element: any, index: number) => {
            return (
              <FormControlLabel
                key={index}
                value={checkbox}
                onClick={(event) => {
                  setCheckbox((event.target as HTMLInputElement).value);
                  updateAnswer([(event.target as HTMLInputElement).value], questionIndex);
                }}
                control={<Checkbox color="primary" />}
                label={element.answer}
                labelPlacement="start" />
            )
          })


        }</div>)

      case "radio":
        return (<div className="survey-answer-type_answers_div">{
          <FormControl>
            <RadioGroup aria-label="position" name="answer" defaultValue="top">
              {
                answers.map((element: any, index: number) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={radio}
                      onClick={(event) => {
                        setRadio((event.target as HTMLInputElement).value);
                        updateAnswer([(event.target as HTMLInputElement).value], questionIndex);
                      }}
                      control={<Radio color="primary" />}
                      label={element.answer}
                      labelPlacement="start"
                    />

                  )
                })
              }

            </RadioGroup>
          </FormControl>

        }</div>)


      case "shortAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            <TextareaAutosize
              className="survey-answer-type_short_answer"
              maxLength={70}
              minRows={1}
              value={shortAnswer}
              onChange={(e) => {
                setShortAnswer(e.target.value);
                updateAnswer([e.target.value], questionIndex);
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
              value={longAnswer}
              onChange={(e) => {
                setLongAnswer(e.target.value);
                updateAnswer([e.target.value], questionIndex);
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
                value={select}
                onChange={(e) => {
                  handleChange(e as SelectChangeEvent, questionIndex);
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
    const surveySetup = () => {
      const temp: iSection[] = [];
      props.questionsAndAnswers.content.map((question) => temp.push({ questionId: question.id as string, answers: [] }))
      setSurvey({ surveyId: props.questionsAndAnswers.id, userId: '123421342134213421342134', content: temp });
    }

    surveySetup();

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
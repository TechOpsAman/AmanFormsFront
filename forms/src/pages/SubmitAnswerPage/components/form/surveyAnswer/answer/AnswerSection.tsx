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

  // const [currAnswers, setCurrAnswers] = useState(['', '', '']);

  // const updateAnswer = (answers: string, questionIndex: number, questionType: QuestionType) => {
  //   const tempArr = survey;

  //   if (questionType === QuestionType.shortAnswer || questionType === QuestionType.longAnswer) {
  //     if (tempArr.content[questionIndex].answers.length === 0 || !tempArr.content[questionIndex].answers[0]) tempArr.content[questionIndex].answers = [answers];
  //     else tempArr.content[questionIndex].answers = [tempArr.content[questionIndex].answers[0] + answers];
  //   }
  //   else {
  //     tempArr.content[questionIndex].answers = [answers];
  //   }
  //   setSurvey(tempArr);
  // }

  // const updateCheckboxAnswer = (answer: string, questionIndex: number) => {
  //   const tempArr = survey;

  //   if (tempArr.content[questionIndex].answers.includes(answer)) {
  //     const index = tempArr.content[questionIndex].answers.indexOf(answer);
  //     tempArr.content[questionIndex].answers.splice(index, 1);
  //   } else {
  //     tempArr.content[questionIndex].answers.push(answer);
  //   }
  //   setSurvey(tempArr);
  // }

  // const handleChange = (event: SelectChangeEvent, questionIndex: number, type: QuestionType) => {
  //   updateAnswer(event.target.value, questionIndex, type as QuestionType);
  // };


  const handleAnswers = (type: string, answers: string[], questionIndex: number) => {
    switch (type) {
      case "checkbox":
        return (<div className="survey-answer-type_answers_div">{

          <CheckboxAnswer answers={answers as any} questionIndex={questionIndex as number} />

          // answers.map((element: any, answerIndex: number) => {
          //   return (
          //     <FormControlLabel
          //       key={answerIndex}
          //       value={element.answer}
          //       onChange={(event) => {
          //         updateCheckboxAnswer((event.target as HTMLInputElement).value, questionIndex);
          //       }}
          //       control={<Checkbox color="primary" />}
          //       label={element.answer}
          //       labelPlacement="start" />
          //   )
          // })


        }</div>)

      case "radio":
        return (<div className="survey-answer-type_answers_div">

          {
            // <RadioGroup>{
            //   answers.map((element: any, index: number) => {
            //     return (
            //       <FormControlLabel
            //         key={`radio-${index}`}
            //         value={element.answer}
            //         onClick={(event) => {
            //              ((event.target as HTMLInputElement).value, questionIndex, type as QuestionType);
            //         }}
            //         control={<Radio color="primary" />}
            //         label={element.answer}
            //         labelPlacement="start"
            //       />
            //     )
            //   })
            // } </RadioGroup>
            <RadioAnswer answers={answers as string[]} questionIndex={questionIndex as number} type={type as QuestionType}/>
          }

        </div>)


      case "shortAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">
            {/* <TextareaAutosize
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
            /> */}

            <ShortAnswer questionIndex={questionIndex as number}/>
          </div>
        );

      case "longAnswer":
        return (
          <div className="survey-answer-type_answers_div" dir="rtl">

            <LongAnswer questionIndex={questionIndex as number}/>

            {/* <TextareaAutosize
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
            /> */}


          </div>

        )

      case "select":
        return (<div className="survey-answer-type_answers_div">
          {
            // <FormControl variant="standard">
            //   <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
            //   <Select
            //     className="survey-answer-type_select_answer"
            //     labelId="demo-simple-select-standard-label"
            //     id="demo-simple-select-standard"
            //     value={currAnswers[2]}
            //     onChange={(e) => {
            //       handleChange(e as SelectChangeEvent, questionIndex, type as QuestionType);
            //       const temp = currAnswers;
            //       console.log(currAnswers[2]);
            //       currAnswers[2] = e.target.value as string;
            //       setCurrAnswers(temp);
            //     }}
            //     label="select"
            //   >
            //     {
            //       answers.map((element: any, index: number) => {
            //         return (
            //           < MenuItem value={element.answer} key={index}> {element.answer} </MenuItem>
            //         )
            //       })
            //     }
            //   </Select>
            // </FormControl>

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
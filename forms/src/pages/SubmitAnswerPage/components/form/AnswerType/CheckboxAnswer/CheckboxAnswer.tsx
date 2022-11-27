import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import { iSurvey } from "../../../../../../interfaces/iSurvey";


function CheckboxAnswer({ answers, questionIndex }: { answers: any, questionIndex: number }) {
  const surveySection = useContext(AnswerContext);
  const answersIndexArray: number[] = []
  const answersStringsArray: string[] = []

  const updateCheckboxAnswer = (answer: string, answerIndex: number) => {
    if (!answersIndexArray.includes(answerIndex)) {
      answersIndexArray.push(answerIndex);
      answersStringsArray.push(answer);
    } else {
      const index = answersIndexArray.indexOf(answerIndex);
      answersIndexArray.splice(index, 1);
      const stringIndex = answersStringsArray.indexOf(answer);
      answersStringsArray.splice(stringIndex, 1);
    }

    surveySection.content[questionIndex].answers = answersStringsArray;
  }

  return (
    answers.map((element: any, answerIndex: number) => {
      return (
        <FormControlLabel
          key={answerIndex}
          value={element.answer}
          onChange={(event) => {
            updateCheckboxAnswer((event.target as HTMLInputElement).value, answerIndex);
          }}
          control={<Checkbox color="primary" />}
          label={element.answer}
          labelPlacement="start" />
      )
    })
  )

}

export default CheckboxAnswer;
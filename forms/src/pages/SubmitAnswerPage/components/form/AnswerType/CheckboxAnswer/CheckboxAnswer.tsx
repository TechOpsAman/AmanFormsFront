import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import { iSurvey } from "../../../../../../interfaces/iSurvey";


function CheckboxAnswer(props: { answers: any, questionIndex: number }) {
  const surveySection = useContext(AnswerContext);

    const updateCheckboxAnswer = (answer: string, questionIndex: number) => {
    // const tempArr = surveySection;

    if (surveySection.content[questionIndex]?.answers.includes(answer)) {
        const index = surveySection.content[questionIndex]?.answers.indexOf(answer);
        surveySection.content[questionIndex]?.answers.splice(index, 1);
    } else {
      surveySection.content[questionIndex]?.answers.push(answer);
    }    

    setSurvey(surveySection);
 survey.content[questionIndex].answers = surveySection
}

    return (
        props.answers.map((element: any, answerIndex: number) => {
            return (
              <FormControlLabel
                key={answerIndex}
                value={element.answer}
                onChange={(event) => {
                  updateCheckboxAnswer((event.target as HTMLInputElement).value, props.questionIndex);
                }}
                control={<Checkbox color="primary" />}
                label={element.answer}
                labelPlacement="start" />
            )
          })
    )

}

export default CheckboxAnswer;
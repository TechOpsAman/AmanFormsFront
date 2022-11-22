import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import { iSurvey } from "../../../../../../interfaces/iSurvey";


function CheckboxAnswer(props: { answers: any, questionIndex: number }) {
//     const [survey, setSurvey] = useState<iSurvey>({ surveyId: '', userId: '', content: [] });

//     const updateCheckboxAnswer = (answer: string, questionIndex: number) => {
//     const tempArr = survey;

//     if (tempArr.content[questionIndex]?.answers.includes(answer)) {
//         const index = tempArr.content[questionIndex]?.answers.indexOf(answer);
//         tempArr.content[questionIndex]?.answers.splice(index, 1);
//     } else {
//         tempArr.content[questionIndex]?.answers.push(answer);
//     }

//     setSurvey(tempArr);
// }

    return (
        props.answers.map((element: any, answerIndex: number) => {
            return (
              <FormControlLabel
                key={answerIndex}
                value={element.answer}
                // onChange={(event) => {
                //   updateCheckboxAnswer((event.target as HTMLInputElement).value, props.questionIndex);
                // }}
                control={<Checkbox color="primary" />}
                label={element.answer}
                labelPlacement="start" />
            )
          })
    )

}

export default CheckboxAnswer;
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { IAnswer } from "../../../../../../interfaces/questions/iAnswer";
import './CheckboxAnswer.scss'

function CheckboxAnswer({ answers, selectedAnswerId }: { answers: IAnswer[], selectedAnswerId: string[] }) {
  return (
    <FormGroup>
      {answers.map((answerInfo: IAnswer, answerIndex: number) => {
        if(selectedAnswerId.includes((answerInfo.id as string))) {
          return(
            <Box key={answerIndex}>
            <FormControlLabel 
              disabled
              checked
              control={<Checkbox/>}
              label={answerInfo.answer}
              labelPlacement="end"
              className="checkbox-answer-page_form_control"
            />
          </Box>
          )
        } else {
          return (
          <Box key={answerIndex}>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label={answerInfo.answer}
              labelPlacement="end"
              className="checkbox-answer-page_form_control"
            />
          </Box>
        );
        }
      })}
    </FormGroup>
  );
}

export default CheckboxAnswer;

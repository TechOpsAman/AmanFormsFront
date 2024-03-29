import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { IAnswer } from "../../../../../../interfaces/questions/iAnswer";
import './CheckboxAnswer.scss'

function CheckboxAnswer({
  answers,
  selectedAnswerId,
}: {
  answers: IAnswer[];
  selectedAnswerId: string[];
}) {
  return (
    <FormGroup>
      {answers.map((answerInfo: IAnswer, answerIndex: number) => {
        if (selectedAnswerId.includes(answerInfo.answer as string)) {
          return (
            <Box key={answerIndex}>
              <FormControlLabel
                disabled
                key={`checked${answerIndex}`}
                checked
                control={<Checkbox />}
                label={answerInfo.answer}
                labelPlacement="end"
                className="checkbox-answer-page_form_control"
              />
            </Box>
          );
        } else {
          return (
            <Box key={answerIndex}>
              <FormControlLabel
                disabled
                key={`not-checked${answerIndex}`}
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

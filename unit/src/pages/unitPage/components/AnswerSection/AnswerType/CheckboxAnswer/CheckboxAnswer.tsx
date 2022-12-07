import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { Answer } from "../../../../../../interfaces/iAnswer";

function CheckboxAnswer({ answers, selectedAnswerId }: { answers: Answer[], selectedAnswerId: string[] }) {
  return (
    <FormGroup>
      {answers.map((answerInfo: Answer, answerIndex: number) => {
        if(selectedAnswerId.includes((answerInfo.id as string))) {
          return(
            <Box key={answerIndex}>
            <FormControlLabel
              disabled
              checked
              control={<Checkbox />}
              label={answerInfo.answer}
              labelPlacement="start"
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
              labelPlacement="start"
            />
          </Box>
        );
        }
      })}
    </FormGroup>
  );
}

export default CheckboxAnswer;

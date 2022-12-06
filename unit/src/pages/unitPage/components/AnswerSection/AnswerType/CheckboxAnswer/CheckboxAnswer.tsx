import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { Answer } from "../../../../../../interfaces/iAnswer";

function CheckboxAnswer({ answers }: { answers: Answer[] }) {
  return  <FormGroup>{answers.map((answerInfo: Answer, answerIndex) => {
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
  })}</FormGroup>;
}

export default CheckboxAnswer;

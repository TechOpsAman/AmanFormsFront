import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RtlProvider from "../../../../../../components/forms/RtlProvider";
import { IAnswer } from "../../../../../../interfaces/questions/iAnswer";

function SelectAnswer({
  answers,
  selectedAnswerId,
}: {
  answers: IAnswer[];
  selectedAnswerId: string[];
}) {
  return (
    <RtlProvider>
      <Box>
        {answers.map((answerInfo: IAnswer, answerIndex: number) => {
          if (selectedAnswerId.includes(answerInfo.id as string)) {
            return (
              <Box key={`select${answerIndex}`}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="survey-answer-unit_select_question">
                    תשובה
                  </InputLabel>
                  <Select
                    labelId="survey-answer-unit_select_question"
                    value={answerInfo.answer}
                    label="תשובה"
                    disabled
                  >
                    <MenuItem value={answerInfo.answer}>
                      {answerInfo.answer}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            );
          }
          return null;
        })}
      </Box>
    </RtlProvider>
  );
}

export default SelectAnswer;

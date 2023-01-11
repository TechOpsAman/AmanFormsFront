import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import RtlProvider from "../../../../../../components/forms/RtlProvider";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import { useState } from "react";

function SelectAnswer({
  answers,
  selectedAnswerId,
}: {
  answers: IAnswer[];
  selectedAnswerId: string[];
}) {
  let newAnswers = answers;

  const removeDuplicates = (arr: IAnswer[]): IAnswer[] => {
    const uniqueAnswers = new Set<string>();
    arr.forEach((item) => uniqueAnswers.add(item.answer));
    return Array.from(uniqueAnswers).map((answer) => {
      return { answer: answer } as IAnswer;
    });
  };

  newAnswers = removeDuplicates(newAnswers);

  return (
    <RtlProvider>
      <Box>
        {newAnswers.map((answerInfo: IAnswer, answerIndex: number) => {
          if (selectedAnswerId.includes(answerInfo.answer as string)) {
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
        })}
      </Box>
    </RtlProvider>
  );
}

export default SelectAnswer;

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import RtlProvider from "../../../../../../components/forms/RtlProvider";
import { AnswerContext } from "../../../../../../context/sectionContext";
import "./SelectAnswer.scss";

function SelectAnswer({
  answers,
  questionIndex,
  currAnswers,
  setCurrAnswers,
  flag,
  setFlag,
}: {
  answers: string[];
  questionIndex: number;
  currAnswers: string[][];
  setCurrAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currAnswer, setCurrAnswer] = useState("");
  const surveyAnswers = useContext(AnswerContext);

  useEffect(() => {
    const temp = currAnswers;
    temp[questionIndex] = [currAnswer];
    setCurrAnswers(temp);
    setFlag(!flag);
  }, [currAnswer]);

  return (
    <Box sx={{ ml: 4 }}>
      <RtlProvider>
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">בחירה</InputLabel>
          <Select
            className="survey-answer-type_select_answer"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={currAnswer}
            onChange={(e) => {
              setCurrAnswer(e.target.value as string);
              surveyAnswers.content[questionIndex].answers = [
                e.target.value as string,
              ];
            }}
            label="select"
          >
            {answers.map((element: any, index: number) => {
              return (
                <MenuItem value={element.answer} key={index}>
                  {element.answer}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </RtlProvider>
    </Box>
  );
}

export default SelectAnswer;

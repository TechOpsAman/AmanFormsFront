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
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <RtlProvider>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-standard-label">בחירה</InputLabel>
          <Select
            className="survey-answer-type_select_answer"
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={currAnswer}
            label="select"
            onChange={(e) => {
              setCurrAnswer(e.target.value as string);
              surveyAnswers.content[questionIndex].answers = [
                e.target.value as string,
              ];
            }}
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

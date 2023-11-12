import { TextField } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import "./LongAnswer.scss";

function LongAnswer({
  questionIndex,
  currAnswers,
  setCurrAnswers,
  flag,
  setFlag,
}: {
  questionIndex: number;
  currAnswers: string[][];
  setCurrAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const surveySection = useContext(AnswerContext);
  const [currAnswer, setCurrAnswer] = useState<string[]>([]);

  const updateAnswer = (answers: string, questionIndex: number) => {
    if (
      surveySection.content[questionIndex].answers.length === 0 ||
      !surveySection.content[questionIndex].answers[0]
    )
      surveySection.content[questionIndex].answers = [answers];
    else
      surveySection.content[questionIndex].answers = [
        surveySection.content[questionIndex].answers[0] + answers,
      ];
  };

  useEffect(() => {
    const temp = currAnswers;
    temp[questionIndex] = currAnswer;
    setCurrAnswers(temp);
    setFlag(!flag);
  }, [currAnswer]);

  return (
    <TextField
      fullWidth
      variant="standard"
      style={{ width: "90%", marginRight: "1rem" }}
      inputProps={{ maxLength: 250 }}
      multiline
    />
  );
}

export default LongAnswer;

import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";

function RadioAnswer({
  required,
  answers,
  questionIndex,
  currAnswers,
  setCurrAnswers,
  flag,
  setFlag,
}: {
  required: boolean,
  answers: string[];
  questionIndex: number;
  currAnswers: string[][];
  setCurrAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const surveySection = useContext(AnswerContext);
  const [currAnswer, setCurrAnswer] = useState("");

  useEffect(() => {
    const temp = currAnswers;
    temp[questionIndex] = [currAnswer];
    setCurrAnswers(temp);
    // Ensure we are toggling the flag only if the answer has changed
    if (currAnswers[questionIndex][0] !== currAnswer) {
      setFlag(!flag);
    }
  }, [currAnswer]);

  // Function to clear the current answer
  const handleClear = () => {
    setCurrAnswer(""); // Reset the answer state
    surveySection.content[questionIndex].answers = [""]; // Update the context
    setFlag(!flag); // Toggle the flag to force update
  };

  return (
    <>
      <RadioGroup value={currAnswer}>
        {answers.map((element: any, index: number) => {
          return (
            <FormControlLabel
              key={`radio-${index}`}
              value={element.answer}
              control={<Radio color="primary" />}
              label={element.answer}
              labelPlacement="end"
              onChange={(e) =>
                setCurrAnswer((e.target as HTMLInputElement).value as string)
              }
            />
          );
        })}
      </RadioGroup>
      {!required &&
      <Button onClick={handleClear} variant="outlined" color="primary">
        Clear Answer
      </Button>}
    </>
  );
}

export default RadioAnswer;

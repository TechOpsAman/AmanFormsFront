import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";

function RadioAnswer({
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
  const surveySection = useContext(AnswerContext);
  const [currAnswer, setCurrAnswer] = useState("");

  useEffect(() => {
    const temp = currAnswers;
    temp[questionIndex] = [currAnswer];
    setCurrAnswers(temp);
    setFlag(!flag);
  }, [currAnswer]);

  return (
    <RadioGroup>
      {answers.map((element: any, index: number) => {
        return (
          <FormControlLabel
            key={`radio-${index}`}
            value={element.answer + index}
            onChange={(e) => {
              setCurrAnswer((e.target as HTMLInputElement).value as string);
              surveySection.content[questionIndex].answers = [
                (e.target as HTMLInputElement).value as string,
              ];
            }}
            control={<Radio color="primary" />}
            label={element.answer}
            labelPlacement="end"
          />
        );
      })}
    </RadioGroup>
  );
}

export default RadioAnswer;

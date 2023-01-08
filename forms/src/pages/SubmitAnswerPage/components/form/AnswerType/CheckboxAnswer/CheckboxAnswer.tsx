import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import "./CheckboxAnswer.scss";

function CheckboxAnswer({
  answers,
  questionIndex,
  currAnswers,
  setCurrAnswers,
  flag,
  setFlag,
}: {
  answers: any;
  questionIndex: number;
  currAnswers: string[][];
  setCurrAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const surveySection = useContext(AnswerContext);
  const [answersIndexArray, setAnswersIndexArray] = useState<number[]>([]);
  const [answersStringsArray, setAnswersStringsArray] = useState<string[]>([]);

  const updateCheckboxAnswer = (answer: string, answerIndex: number) => {      
    if (!answersIndexArray.includes(answerIndex)) {
      setAnswersIndexArray([...answersIndexArray, answerIndex]);
      setAnswersStringsArray([...answersStringsArray, answer]);
    } else {
      setAnswersIndexArray(
        answersIndexArray.filter((index) => index !== answerIndex)
      );
      setAnswersStringsArray(
        answersStringsArray.filter((string) => string !== answer)
      );
    }

    const newContent = { ...surveySection.content };
    newContent[questionIndex].answers = answersStringsArray;
    surveySection.content[questionIndex].answers = answersStringsArray;
  };

  useEffect(() => {
    const temp = currAnswers;
    temp[questionIndex] = answersStringsArray;
    setCurrAnswers(temp);
    setFlag(!flag);
  }, [answersIndexArray]);

  return answers.map((element: any, answerIndex: number) => {
    return (
      <FormControlLabel
        key={answerIndex}
        value={element.answer}
        onChange={(event) => {
          updateCheckboxAnswer(
            (event.target as HTMLInputElement).value,
            answerIndex
          );
        }}
        control={<Checkbox color="primary" />}
        label={element.answer}
        labelPlacement="end"
      />
    );
  });
}

export default CheckboxAnswer;

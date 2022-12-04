import "./QuestionChoosingByIndexSection.scss";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { IQuestion } from "../../../../../interfaces/iQuestion";

function QuestionChoosingByIndexSection({
  questionList,
}: {
  questionList: IQuestion[];
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  const changeQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChosenQuestion(questionList[Number(event.target.value) - 1]);
  };

  const changeToNextQuestion = () => {
    setChosenQuestion(questionList[questionList.indexOf(chosenQuestion) + 1]);
  };

  const changeToPreviousQuestion = () => {
    setChosenQuestion(questionList[questionList.indexOf(chosenQuestion) - 1]);
  };

  return (
    <div>
      {questionList.indexOf(chosenQuestion) === questionList.length - 1 ? (
        <IconButton disabled>
          <KeyboardArrowRightIcon
            className="switch-to-next-question-arrow"
            onClick={changeToNextQuestion}
          ></KeyboardArrowRightIcon>
        </IconButton>
      ) : (
        <IconButton>
          <KeyboardArrowRightIcon
            className="switch-to-next-question-arrow"
            onClick={changeToNextQuestion}
          ></KeyboardArrowRightIcon>
        </IconButton>
      )}
      <p className="number-of-question"> מתוך {questionList.length}</p>
      <input
        type="number"
        value={questionList.indexOf(chosenQuestion) + 1}
        min="1"
        max={questionList.length}
        dir="ltr"
        onChange={changeQuestion}
      />
      {questionList.indexOf(chosenQuestion) === 0 ? (
        <IconButton disabled>
          <KeyboardArrowLeftIcon
            className="switch-to-previous-question-arrow"
            onClick={changeToPreviousQuestion}
          ></KeyboardArrowLeftIcon>
        </IconButton>
      ) : (
        <IconButton>
          <KeyboardArrowLeftIcon
            className="switch-to-previous-question-arrow"
            onClick={changeToPreviousQuestion}
          ></KeyboardArrowLeftIcon>
        </IconButton>
      )}
    </div>
  );
}

export default QuestionChoosingByIndexSection;

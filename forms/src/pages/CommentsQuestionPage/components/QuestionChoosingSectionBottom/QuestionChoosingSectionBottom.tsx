import "./QuestionChoosingSectionBottom.scss";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Card, IconButton } from "@mui/material";

function QuestionChoosingSectionBottom({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  const changeToNextQuestion = () => {
    setChosenQuestion(questionList[questionList.indexOf(chosenQuestion) + 1]);
  };

  const changeToPreviousQuestion = () => {
    setChosenQuestion(questionList[questionList.indexOf(chosenQuestion) - 1]);
  };

  return (
    <Card
      className="question-choosing-section-bottom-main"
      style={{ boxShadow: "1px 2px 4px 1px rgb(131, 131, 131)",
      borderRadius: "30px" }}
    >
      {questionList.indexOf(chosenQuestion) === 0 ? (
        <IconButton disabled>
          <KeyboardArrowLeftIcon className="switch-to-previous-question-arrow"></KeyboardArrowLeftIcon>
        </IconButton>
      ) : (
        <IconButton onClick={changeToPreviousQuestion}>
          <KeyboardArrowLeftIcon className="switch-to-previous-question-arrow"></KeyboardArrowLeftIcon>
        </IconButton>
      )}
      {questionList.indexOf(chosenQuestion) === questionList.length - 1 ? (
        <IconButton disabled>
          <KeyboardArrowRightIcon className="switch-to-next-question-arrow"></KeyboardArrowRightIcon>
        </IconButton>
      ) : (
        <IconButton onClick={changeToNextQuestion}>
          <KeyboardArrowRightIcon className="switch-to-next-question-arrow"></KeyboardArrowRightIcon>
        </IconButton>
      )}
    </Card>
  );
}

export default QuestionChoosingSectionBottom;

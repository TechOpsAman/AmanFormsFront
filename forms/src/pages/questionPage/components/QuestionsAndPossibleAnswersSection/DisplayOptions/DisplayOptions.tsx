import "./DisplayOptions.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, IconButton } from "@material-ui/core";
import { useState } from "react";
import { IQuestion } from "../../../../../interfaces/iQuestion";

function DisplayOptions({ questionList }: { questionList: IQuestion[] }) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  const [areAnswersDisplayed, setAreAnswersDisplayed] =
    useState<boolean>(false);

  const changeDisplayState = () => {
    setAreAnswersDisplayed(!areAnswersDisplayed);
  };

  return (
    <Card className="display-options-container">
      <IconButton onClick={changeDisplayState}>
        {!areAnswersDisplayed ? (
          <>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
            <span className="display-options-text">אפשרויות תצוגה</span>
          </>
        ) : (
          <>
            <KeyboardArrowUpIcon fontSize="small"></KeyboardArrowUpIcon>
            <span className="display-options-text">הסתרת אפשרויות</span>
          </>
        )}
      </IconButton>
      <span className="question-name">{chosenQuestion.questionName}</span>
    </Card>
  );
}

export default DisplayOptions;

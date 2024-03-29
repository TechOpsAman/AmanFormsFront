import "./DisplayOptions.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import { IconButton } from "@mui/material";

function DisplayOptions({
  areAnswersDisplayed,
  setAreAnswersDisplayed,
  chosenQuestion,
}: {
  areAnswersDisplayed: boolean;
  setAreAnswersDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  chosenQuestion: IQuestion;
}) {
  const changeDisplayState = () => {
    setAreAnswersDisplayed(!areAnswersDisplayed);
  };

  return (
    <div className="display-options-container">
      <IconButton onClick={changeDisplayState}>
        {!areAnswersDisplayed ? (
          <>
            <KeyboardArrowDownIcon
              fontSize="small"
              style={{ color: "blue" }}
            ></KeyboardArrowDownIcon>
            <span className="display-options-text">אפשרויות תצוגה</span>
          </>
        ) : (
          <>
            <KeyboardArrowUpIcon
              fontSize="small"
              style={{ color: "blue" }}
            ></KeyboardArrowUpIcon>
            <span className="display-options-text">הסתרת אפשרויות</span>
          </>
        )}
      </IconButton>
      <span className="question-name">{chosenQuestion.questionName}</span>
    </div>
  );
}

export default DisplayOptions;

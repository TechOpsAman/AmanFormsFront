import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, IconButton } from "@material-ui/core";
import { useState } from "react";
import { IQuestion } from "../../../../../interfaces/iQuestion";

function DisplayOptions({ questionList }: { questionList: IQuestion[] }) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return (
    <div>
      <IconButton>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        <span>{chosenQuestion.questionName}</span>
      </IconButton>
    </div>
  );
}

export default DisplayOptions;

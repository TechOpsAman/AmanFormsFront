// import "./SelectQuestion.scss";
import * as React from "react";
import { IQuestion } from "../../../../interfaces/iQuestion";

function SelectQuestionByIndex({
  questionList,
  setQuestionList,
}: {
  questionList: IQuestion[];
  setQuestionList: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}) {
  // const [question, setQuestion] = React.useState("");

  return (
    <div className="Xb9hP">
      <input
        type="number"
        className="whsOnd zHQkBf"
        aria-label="מספר שאלה"
        value={questionList.length}
        min="1"
        max={questionList.length}
        step="1"
        dir="ltr"
        data-initial-value={questionList.length}
      />
    </div>
  );
}

export default SelectQuestionByIndex;

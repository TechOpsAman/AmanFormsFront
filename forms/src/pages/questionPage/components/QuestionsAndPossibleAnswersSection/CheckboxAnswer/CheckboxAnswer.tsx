import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IAnswer } from "../../../../../interfaces/iAnswer";
import "./CheckboxAnswer.scss";

function CheckboxAnswer({ checkboxAnswer }: { checkboxAnswer: IAnswer }) {
  return (
    <div className="check-box-answer-main">
      <span className="answer">{checkboxAnswer.answer}</span>
      <div>
        <CheckBoxOutlineBlankIcon />
      </div>
    </div>
  );
}

export default CheckboxAnswer;

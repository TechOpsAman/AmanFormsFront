import "./RadioAnswer.scss";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IAnswer } from "../../../../../interfaces/iAnswer";

function RadioAnswer({ radioAnswer }: { radioAnswer: IAnswer }) {
  return (
    <div className="radio-answer-main">
      <span className="answer">{radioAnswer.answer}</span>
      <div>
        <RadioButtonUncheckedIcon />
      </div>
    </div>
  );
}

export default RadioAnswer;

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { IAnswer } from "../../../../../interfaces/iAnswer";

function RadioAnswer({ radioAnswer }: { radioAnswer: IAnswer }) {
  return (
    <div>
      <span>{radioAnswer.answer}</span>
      <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
    </div>
  );
}

export default RadioAnswer;

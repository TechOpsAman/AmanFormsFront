import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IAnswer } from "../../../../../interfaces/iAnswer";

function CheckboxAnswer({ checkboxAnswer }: { checkboxAnswer: IAnswer }) {
  return (
    <div>
      <span>{checkboxAnswer.answer}</span>
      <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
    </div>
  );
}

export default CheckboxAnswer;

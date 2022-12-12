import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";

function QuestionChoosingByNameSection({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setChosenQuestion(
      questionList.find(
        (question) => question.questionName === event.target.value
      ) as IQuestion
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={chosenQuestion?.questionName}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {questionList
          ? questionList.map((question: IQuestion, index: number) => (
              <MenuItem value={question.questionName} key={index}>
                {question.questionName}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}

export default QuestionChoosingByNameSection;

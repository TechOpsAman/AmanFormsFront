import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IQuestion } from "../../../../../interfaces/questions/iQuestion";
import RtlProvider from "../../../../../components/forms/RtlProvider";
import { column } from "stylis";

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
      <RtlProvider>
        <Select
          value={chosenQuestion?.questionName}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {questionList
            ? questionList.map((question: IQuestion, index: number) => (
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  value={question.questionName}
                  key={index}
                >
                  {question.questionName}
                </MenuItem>
              ))
            : null}
        </Select>
      </RtlProvider>
    </FormControl>
  );
}

export default QuestionChoosingByNameSection;

// import "./SelectQuestion.scss";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IQuestion } from "../../../../interfaces/iQuestion";

function SelectQuestionByName({
  questionList,
  setQuestionList,
}: {
  questionList: IQuestion[];
  setQuestionList: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}) {
  const [question, setQuestion] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuestion(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={question}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {questionList
          ? questionList.map((question: IQuestion) => (
              <MenuItem value={question.questionName}>
                {question.questionName}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}

export default SelectQuestionByName;

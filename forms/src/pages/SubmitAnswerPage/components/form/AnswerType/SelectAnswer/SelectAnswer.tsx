import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";

function SelectAnswer(props: {answers: string[]}) {
    const [currAnswers, setCurrAnswers] = useState(['', '', '']);
    
    return (
        <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
            <Select
                className="survey-answer-type_select_answer"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currAnswers[2]}
                // onChange={(e) => {
                //     handleChange(e as SelectChangeEvent, questionIndex, type as QuestionType);
                //     const temp = currAnswers;
                //     console.log(currAnswers[2]);
                //     currAnswers[2] = e.target.value as string;
                //     setCurrAnswers(temp);
                // }}
                label="select"
            >
                {
                    props.answers.map((element: any, index: number) => {
                        return (
                            < MenuItem value={element.answer} key={index}> {element.answer} </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default SelectAnswer;
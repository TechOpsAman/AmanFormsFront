import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import './SelectAnswer.scss';

function SelectAnswer({ answers, questionIndex }: { answers: string[], questionIndex: number }) {

    const [currAnswer, setCurrAnswer] = useState('');
    const surveyAnswers = useContext(AnswerContext);

    return (
        <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
            <Select
                className="survey-answer-type_select_answer"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currAnswer}
                onChange={(e) => {
                    setCurrAnswer(e.target.value as string);
                    surveyAnswers.content[questionIndex].answers = [e.target.value as string];
                }}
                label="select"
            >
                {
                    answers.map((element: any, index: number) => {
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
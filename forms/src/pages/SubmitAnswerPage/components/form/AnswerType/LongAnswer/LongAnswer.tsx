import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";

function LongAnswer(props: {}) {
    const [currAnswers, setCurrAnswers] = useState(['', '', '']);
    return (
        <TextareaAutosize
            className="survey-answer-type_long_answer"
            maxLength={1000}
            minRows={4}
            value={currAnswers[1]}
        // onChange={(e) => {
        //     updateAnswer(e.target.value, questionIndex, type as QuestionType);
        //     const temp = currAnswers;
        //     currAnswers[1] = e.target.value as string;
        //     setCurrAnswers(temp);
        // }}
        />
    )

}

export default LongAnswer;
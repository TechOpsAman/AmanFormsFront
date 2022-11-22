import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";

function ShortAnswer(props: {}) {
    const [currAnswers, setCurrAnswers] = useState(['', '', '']);
    
    return (
        <TextareaAutosize
            className="survey-answer-type_short_answer"
            maxLength={70}
            minRows={1}
            value={currAnswers[0]}
            // onChange={(e) => {
            //     updateAnswer(e.target.value, questionIndex, type as QuestionType);
            //     const temp = currAnswers;
            //     currAnswers[0] = e.target.value as string;
            //     setCurrAnswers(temp);
            // }}
        />
    )
}

export default ShortAnswer;
import { TextareaAutosize } from "@material-ui/core";
import { useState, useContext } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";

function LongAnswer(props: { questionIndex: number }) {
    const surveySection = useContext(AnswerContext);
    const [currAnswer, setCurrAnswer] = useState<string[]>([]);

    const updateAnswer = (answers: string, questionIndex: number) => {
            if (surveySection.content[questionIndex].answers.length === 0 || !surveySection.content[questionIndex].answers[0]) surveySection.content[questionIndex].answers = [answers];
            else surveySection.content[questionIndex].answers = [surveySection.content[questionIndex].answers[0] + answers];
    }


    return (
        <TextareaAutosize
            className="survey-answer-type_long_answer"
            maxLength={1000}
            minRows={4}
            value={currAnswer[1]}
            onChange={(e) => {
                
                updateAnswer(e.target.value, props.questionIndex);
                const temp = currAnswer;
                currAnswer[1] = e.target.value as string;
                setCurrAnswer(temp);
            }}
        />
    )

}

export default LongAnswer;
import { TextareaAutosize } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import './ShortAnswer.scss';

function ShortAnswer({ questionIndex }: {questionIndex: number}) {
    const surveySection = useContext(AnswerContext);
    const [currAnswer, setCurrAnswer] = useState<string[]>([]);

    const updateAnswer = (answers: string, questionIndex: number) => {
            if (surveySection.content[questionIndex].answers.length === 0 || !surveySection.content[questionIndex].answers[0]) surveySection.content[questionIndex].answers = [answers];
            else surveySection.content[questionIndex].answers = [surveySection.content[questionIndex].answers[0] + answers];
    }

    
    return (
        <TextareaAutosize
            className="survey-answer-type_short_answer"
            maxLength={70}
            maxRows={1}
            value={currAnswer[0]}
            onChange={(e) => {
                updateAnswer(e.target.value, questionIndex);
                const temp = currAnswer;
                currAnswer[0] = e.target.value as string;
                setCurrAnswer(temp);
            }}
        />
    )
}

export default ShortAnswer;
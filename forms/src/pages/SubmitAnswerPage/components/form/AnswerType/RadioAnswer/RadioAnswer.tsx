import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";
import { QuestionType } from "../../../../../../interfaces/iSection";


function RadioAnswer(props: { answers: string[], questionIndex: number, type: string }) {

    const surveySection = useContext(AnswerContext);
    const [currAnswer, setCurrAnswer] = useState('');

    return (
        <RadioGroup>
            {
                props.answers.map((element: any, index: number) => {
                    return (
                        <FormControlLabel
                            key={`radio-${index}`}
                            value={element.answer}
                            onChange={(e) => {
                                setCurrAnswer((e.target as HTMLInputElement).value as string);
                                surveySection.content[props.questionIndex].answers = [(e.target as HTMLInputElement).value as string];
                            }}
                            control={<Radio color="primary" />}
                            label={element.answer}
                            labelPlacement="start"
                        />
                    )
                })
            }
        </RadioGroup>
    )

}

export default RadioAnswer;
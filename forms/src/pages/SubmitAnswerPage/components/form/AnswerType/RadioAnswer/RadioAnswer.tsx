import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useContext, useState } from "react";
import { AnswerContext } from "../../../../../../context/sectionContext";

function RadioAnswer({ answers, questionIndex }: { answers: string[], questionIndex: number }) {

    const surveySection = useContext(AnswerContext);
    const [currAnswer, setCurrAnswer] = useState('');

    return (
        <RadioGroup>
            {
                answers.map((element: any, index: number) => {
                    return (
                        <FormControlLabel
                            key={`radio-${index}`}
                            value={element.answer}
                            onChange={(e) => {
                                setCurrAnswer((e.target as HTMLInputElement).value as string);
                                surveySection.content[questionIndex].answers = [(e.target as HTMLInputElement).value as string];
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
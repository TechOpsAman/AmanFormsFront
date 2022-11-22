import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

function RadioAnswer(props: { answers: string[], questionIndex: number }) {
    return (
        <RadioGroup>{
            props.answers.map((element: any, index: number) => {
                return (
                    <FormControlLabel
                        key={`radio-${index}`}
                        value={element.answer}
                        // onClick={(event) => {
                        //     ((event.target as HTMLInputElement).value, props.questionIndex, type as QuestionType);
                        // }}
                        control={<Radio color="primary" />}
                        label={element.answer}
                        labelPlacement="start"
                    />
                )
            })
        } </RadioGroup>
    )

}

export default RadioAnswer;
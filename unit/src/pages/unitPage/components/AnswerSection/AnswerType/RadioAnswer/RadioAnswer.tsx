import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { IAnswer } from "../../../../../../interfaces/questions/iAnswer";
import './RadioAnswer.scss'

function RadioAnswer({ answers, selectedAnswerId }: { answers: IAnswer[], selectedAnswerId: string[] }) {
    return (
        <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            {answers.map((answerInfo: IAnswer, answerIndex: number) => {
                    if (selectedAnswerId.includes((answerInfo.id as string))) {
                        return (
                            <Box key={`radio-button${answerIndex}`}>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    checked
                                    control={<Radio />}
                                    label={answerInfo.answer}
                                    labelPlacement="end"
                                    className="radio-answer-page_form_control"
                                />
                            </FormControl>
                            </Box>
                            
                        )
                    } else {
                        return(
                            <Box key={`radio-button${answerIndex}`}>
                                <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<Radio />}
                                    label={answerInfo.answer}
                                    labelPlacement="end"
                                    className="radio-answer-page_form_control"
                                />
                            </FormControl>
                            </Box>
                        )
                    }

                })
            }

        </RadioGroup>
    )
}

export default RadioAnswer;
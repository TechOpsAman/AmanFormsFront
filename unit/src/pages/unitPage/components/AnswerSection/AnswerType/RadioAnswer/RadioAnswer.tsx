import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Answer } from "../../../../../../interfaces/iAnswer";

function RadioAnswer({ answers, selectedAnswerId }: { answers: Answer[], selectedAnswerId: string[] }) {
    return (
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            {answers.map((answerInfo: Answer, answerIndex: number) => {
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
                                    labelPlacement="start"
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
                                    labelPlacement="start"
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
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Answer } from "../../../../../../interfaces/iAnswer";

function RadioAnswer({ answers, selectedAnswerId }: { answers: Answer[], selectedAnswerId: string[] }) {
    return (
        {
            answers.map((answerInfo: Answer, answerIndex: number) => {

                if (selectedAnswerId.includes((answerInfo.id as string))) {
                    return (
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="disabled"
                                        disabled
                                        control={<Radio />}
                                        label="other"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                    )

                } else{
                    return(
                        <FormControlLabel
                        value="start"
                        control={<Radio />}
                        label={answerInfo.answer}
                        labelPlacement="start"
                      />
                    )
                }

            }   )
        }

    )
}

export default RadioAnswer;
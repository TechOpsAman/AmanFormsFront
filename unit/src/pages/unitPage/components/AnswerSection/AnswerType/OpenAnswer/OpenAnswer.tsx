import { TextField } from "@mui/material";
import { Box } from "@mui/system";

function OpenAnswer({ selectedAnswerId } : { selectedAnswerId: string[]}) {
    return(
    <Box>
         <TextField
          id="outlined-read-only-input"
          label="תשובה"
          defaultValue={selectedAnswerId[0]}
          InputProps={{
            readOnly: true,
          }}
        />
    </Box>
    )
}

export default OpenAnswer;
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import RtlProvider from "../../../../../../components/forms/RtlProvider";

function OpenAnswer({ selectedAnswerId }: { selectedAnswerId: string[] }) {
  return (
    <RtlProvider>
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
    </RtlProvider>
  );
}

export default OpenAnswer;

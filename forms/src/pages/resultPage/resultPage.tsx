import { Box, Button, Typography } from "@mui/material";
import "./resultPage.scss";

function ResultPage() {
  return (
    <Box className="survey-result-page_wraps_box">
      <Box className="survey-result-page_main_box">
        <Typography>תגובות</Typography>
        <Box className="survey-result-page_buttons">
          <Button>סיכום</Button>
          <Button>שאלה</Button>
          <Button>יחידה</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ResultPage;

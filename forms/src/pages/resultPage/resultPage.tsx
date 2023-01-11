import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import AnswerService from "../../services/answerService";
import { useLocation } from "react-router-dom";
import "./resultPage.scss";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";
import { useEffect, useState } from "react";
import UnitPage from "../unitPage/unitPage";
import { updateIsOpen } from "../../services/questionsService";

function ResultPage() {
  const location = useLocation();
  const surveyId: string = location.pathname.split("/")[2];
  const [answerAndQuestions, setAnswerAndQuestions] = useState<
    ISurveyAnswers[]
  >([]);

  const [isUnitClicked, setIsUnitClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const temp = await AnswerService.getAnswerSurvey(surveyId);
        setAnswerAndQuestions(temp);
    };

    fetchData();
  }, [surveyId]);

  const surveyCommentLength = answerAndQuestions?.length;

  const handleUnitClicked = () => {
    setIsUnitClicked(true);
  };

  const handleCommentsSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateIsOpen(surveyId, event.target.checked);
  }

  return (
    <Box className="survey-result-page_wraps_box">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box className="survey-result-page_main_box">
          <Box className="survey-result-page_comments_box">
            <Typography dir="rtl" variant="h4">
              {surveyCommentLength} תגובות
            </Typography>
          </Box>
          <Box className="survey-result-page_switch">
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked onChange={handleCommentsSwitch}/>}
                label="מקבל תגובות"
                sx={{minWidth: '6rem', ml: 2}}
              />
            </FormGroup>
          </Box>
          <Box className="survey-result-page_buttons">
            <Button
              sx={{
                width: 100,
                padding: 1,
                margin: 2,
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              סיכום
            </Button>
            <Button
              sx={{
                width: 100,
                padding: 1,
                margin: 2,
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              שאלה
            </Button>
            <Button
              sx={{
                width: 100,
                padding: 1,
                margin: 2,
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
              onClick={() => {
                handleUnitClicked();
              }}
            >
              יחידה
            </Button>
          </Box>
        </Box>
        <Box>{isUnitClicked && <UnitPage id={surveyId} />}</Box>
      </Box>
    </Box>
  );
}

export default ResultPage;

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
import CommentsQuesionPage from "../CommentsQuestionPage/CommentsQuesionPage";
import CommentsSummaryPage from "../CommentsSummaryPage/CommentsSummaryPage";

function ResultPage() {
  const location = useLocation();
  const surveyId: string = location.pathname.split("/")[2];
  const [answerAndQuestions, setAnswerAndQuestions] = useState<
    ISurveyAnswers[]
  >([]);

  const [isUnitClicked, setIsUnitClicked] = useState(false);
  const [isQuestionClicked, setisQuestionClicked] = useState(false);
  const [isSummeryClicked, setisSummeryClicked] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const temp = await AnswerService.getAnswerSurvey(surveyId);
        setAnswerAndQuestions(temp);
    };

    fetchData();
  }, [surveyId]);

  const surveyCommentLength = answerAndQuestions?.length;

  const handleUnitClicked = (value: string) => {
    switch (value) {
        case 'unit':
            setIsUnitClicked(true);
            setisQuestionClicked(false);
            setisSummeryClicked(false);
            break;
        case 'question':
            setisQuestionClicked(true);
            setIsUnitClicked(false);
            setisSummeryClicked(false);
            break;
        case 'summery':
            setisSummeryClicked(true);
            setisQuestionClicked(false);
            setIsUnitClicked(false);
            break;
    
        default:
            break;
    }
    
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
              onClick={() => {
                handleUnitClicked('summery');
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
              onClick={() => {
                handleUnitClicked('question');
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
                handleUnitClicked('unit');
              }}
            >
              יחידה
            </Button>
          </Box>
        </Box>
        <Box>
            {isUnitClicked && <UnitPage id={surveyId} />}
            {isQuestionClicked && <CommentsQuesionPage id={surveyId} />}
            {isSummeryClicked && <CommentsSummaryPage id={surveyId} />}
        </Box>
      </Box>
    </Box>
  );
}

export default ResultPage;

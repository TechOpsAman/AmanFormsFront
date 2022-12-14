import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import "./ScrollPages.scss";
import { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import QuestionName from "../QuestionName/QuestionName";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../../../../../interfaces/questions/iSurvey";

function ScrollPages({
  questionsAndAnswers, survey,
}: {
  questionsAndAnswers: ISurveyAnswers[], survey: ISurveyQuestions;
}) {
  const numOfPages = questionsAndAnswers.length;
  const [currPage, setCurrPage] = useState(1);
  const [theme, setTheme] = useState(`  מתוך   ${numOfPages}  `);
  const [changePage, setChangePage] = useState(false);

  const handelPages = (pageNum: number) => {
    setCurrPage(() => pageNum);
    setChangePage(true);
  };

  const handelForwardPage = () => {
    if (currPage < numOfPages) setCurrPage((prevPage) => prevPage + 1);
    setChangePage(true);
  };

  const handelBackwardsPage = () => {
    if (currPage !== 1) setCurrPage((prevPage) => prevPage - 1);
    setChangePage(true);
  };

  return (
    <Box>
      <Box className="survey-answer-unit_scroll_survey_units">
        <IconButton onClick={handelForwardPage}>
          <ChevronLeftIcon color="primary" fontSize="large" />
        </IconButton>
        <Box dir="rtl" className="survey-answer-unit_page_conter">
          <TextField
            id="standard-basic"
            variant="standard"
            type="number"
            value={currPage}
            className="survey-answer-unit_text_filed"
            InputProps={{ inputProps: { min: 1, max: 3 } }}
            onChange={(event) => {
              handelPages(
                (event.target as HTMLInputElement).value as unknown as number
              );
            }}
          />
          <span>{theme}</span>
        </Box>
        <IconButton onClick={handelBackwardsPage}>
          <ChevronRightIcon color="primary" fontSize="large" />
        </IconButton>
      </Box>

      <Box className="survey-answer-unit_questions_and_answers">
        {changePage ? (
          <QuestionName
            questionsAndAnswers={questionsAndAnswers}
            survey={survey}
            currPage={(currPage - 1) as number}
          />
        ) : (
          <QuestionName
            questionsAndAnswers={questionsAndAnswers}
            survey={survey}     
            currPage={0}
          />
        )}
      </Box>
    </Box>
  );
}

export default ScrollPages;

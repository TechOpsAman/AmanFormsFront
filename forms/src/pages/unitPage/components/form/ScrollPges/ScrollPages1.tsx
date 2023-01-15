import IconButton from "@mui/material/IconButton";
import "./ScrollPages.scss";
import { useState } from "react";
import QuestionName from "../QuestionName/QuestionName";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../../../../../interfaces/questions/iSurvey";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function ScrollPages({
  questionsAndAnswers,
  survey,
}: {
  questionsAndAnswers: ISurveyAnswers[];
  survey: ISurveyQuestions;
}) {
  const numOfPages = questionsAndAnswers.length;
  const [currPage, setCurrPage] = useState(1);
  const [changePage, setChangePage] = useState(false);

  const handelPages = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrPage(Number(event.target.value));
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
    <div className="scroll-pages-main-div">
      <Box className="survey-answer-unit_scroll_survey_units">
      <div>
      {currPage === numOfPages ? (
        <IconButton disabled>
          <KeyboardArrowLeftIcon className="switch-to-previous-question-arrow"></KeyboardArrowLeftIcon>
        </IconButton>
      ) : (
        <IconButton onClick={handelForwardPage}>
          <KeyboardArrowLeftIcon className="switch-to-previous-question-arrow"></KeyboardArrowLeftIcon>
        </IconButton>
      )}
      <p className="number-of-question"> מתוך {numOfPages}</p>
      <input
        className="number-of-question-input"
        type="number"
        value={currPage}
        min="1"
        max={numOfPages}
        dir="ltr"
        onChange={handelPages}
      />
      {currPage === 1 ? (
        <IconButton disabled>
          <KeyboardArrowRightIcon className="switch-to-next-question-arrow"></KeyboardArrowRightIcon>
        </IconButton>
      ) : (
        <IconButton onClick={handelBackwardsPage}>
          <KeyboardArrowRightIcon className="switch-to-next-question-arrow"></KeyboardArrowRightIcon>
        </IconButton>
      )}
    </div>
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
    </div>
  );
}

export default ScrollPages;

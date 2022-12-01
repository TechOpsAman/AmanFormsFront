import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import "./ScrollPages.scss";
import { iSurveyQuestions } from "../../../../../interfaces/iSurveyQuestions";
import { useState } from "react";

function ScrollPages({ questionsAndAnswers }: { questionsAndAnswers: iSurveyQuestions[] }) {
  const numOfPages = questionsAndAnswers.length;
  const [currPage, setCurrPage] = useState<number>(0);

  const handelForwardPage = () => {
    if(currPage < numOfPages) setCurrPage(prevCurrPage => prevCurrPage + 1)
    //  <AnswerType questionsAndAnswers={questionsAndAnswers as unknown as iSurveyQuestions[]} currPage={currPage as number} />
    console.log(currPage, "numOfPages: " + numOfPages)   
  }

  const handelBackwardsPage = () => {
    if(currPage !== 0) setCurrPage(prevCurrPage => prevCurrPage - 1)
    // <AnswerType questionsAndAnswers={questionsAndAnswers as unknown as iSurveyQuestions[]} currPage={currPage as number} />
    console.log(currPage, "numOfPages: " + numOfPages)
  }

  return (
    <div className="survey-answer-unit_scroll_survey_units">
      <IconButton onClick={handelForwardPage} >
        <ChevronLeftIcon color="primary" fontSize="large" />
      </IconButton>
      
      <IconButton onClick={handelBackwardsPage}>
        <ChevronRightIcon color="primary" fontSize="large" />
      </IconButton>
    </div>
  );
} 

export default ScrollPages;

import { iSurveyQuestions } from "../../../../../interfaces/iSurveyQuestions";
import { Box } from "@material-ui/core";
import { iSurvey } from "../../../../../interfaces/iSurvey";
import { Typography } from "@mui/material";

function AnswerType({
  questionsAndAnswers,
  survey,
  currPage,
}: {
  questionsAndAnswers: iSurveyQuestions[];
  survey: iSurvey;
  currPage: number;
}) {

  const questionName = () => {
    return questionsAndAnswers[currPage].content.map((question, index) => {
      console.log('questionId', question.questionId)
      console.log(survey.content.filter((section) => section.id === question.questionId))
      const questionInfo = survey.content.filter((section) => section.id === question.questionId)
      console.log(questionInfo[0].questionName)
      return(questionInfo)
    })
  }


  return (
    <Box className="survey-answer-unit_question_name">
      <h3>{survey.surveyName}</h3>
      
      <>{console.log(questionsAndAnswers[currPage])}</>
    </Box>
  );
}
export default AnswerType;

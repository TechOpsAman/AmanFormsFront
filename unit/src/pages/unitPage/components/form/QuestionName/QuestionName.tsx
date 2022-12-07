import { iSurveyQuestions } from "../../../../../interfaces/iSurveyQuestions";
import { Box } from "@material-ui/core";
import { iSurvey } from "../../../../../interfaces/iSurvey";
import { Question } from "../../../../../interfaces/iQuestion";
import AnswerSection from "../../AnswerSection/AnswerType/AnswerSection/AnswerSection";
import { Answer } from "../../../../../interfaces/iAnswer";

function QuestionName({
  questionsAndAnswers,
  survey,
  currPage,
}: {
  questionsAndAnswers: iSurveyQuestions[];
  survey: iSurvey;
  currPage: number;
}) {
  // const questionName = () => {
  //   return questionsAndAnswers[currPage].content.map((question, index) => {
  //     const listItems = survey.content.filter(
  //       (section) =>
  //         section.questionName === question.questionName &&
  //         section.questionType === question.questionType
  //     );
  //     return listItems;
  //   });
  // };

  const questionInfo = (question: Question) => {
    return survey.content.filter(
      (section) =>
        section.questionName === question.questionName &&
        section.questionType === question.questionType
    )[0];
  };

  return (
    <Box className="survey-answer-unit_question_name">
      <h3>{survey.surveyName}</h3>
      <>
        {questionsAndAnswers[currPage].content.map((question, index) => {
          return (
            <div key={index}>
              <h1>{questionInfo(question).questionName}</h1>
              <AnswerSection answers={questionInfo(question).answers as Answer[]} questionType={questionInfo(question).questionType as string} selectedAnswerId={question.answers as string[]}/>
            </div>
          );
        })}
      </>
    </Box>
  );
}
export default QuestionName;

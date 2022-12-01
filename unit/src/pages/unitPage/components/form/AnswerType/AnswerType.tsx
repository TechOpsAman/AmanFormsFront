import { iSurveyQuestions } from "../../../../../interfaces/iSurveyQuestions";
import { Box } from "@material-ui/core";

function AnswerType({ questionsAndAnswers, currPage }: { questionsAndAnswers: iSurveyQuestions[], currPage: number }) {
    {console.log('huh')}
  return (
    <div>
      {questionsAndAnswers.map((question: any, index: number) => {
        return (
          <Box className="survey-answer-unit_question_name" key={`questionName${index}`}>
            {console.log(question[currPage].questionId)}
           {question[currPage].questionId}
            {/* {question.content.map((questionName: any, index: number) => {
                <h3> {questionName.questionId} </h3>
            })} */}
          </Box>
        );
      })}
    </div>
  );
}
export default AnswerType;

import { Box } from "@material-ui/core";
import AnswerSection from "../../AnswerSection/AnswerType/AnswerSection/AnswerSection";
import { IAnswer } from "../../../../../interfaces/questions/iAnswer";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../../../../../interfaces/questions/iSurvey";
import { ISection } from "../../../../../interfaces/answers/iSection";
import './QuestionName.scss';

function QuestionName({
  questionsAndAnswers,
  survey,
  currPage,
}: {
  questionsAndAnswers: ISurveyAnswers[];
  survey: ISurveyQuestions;
  currPage: number;
}) {
  const questionInfo = (question: ISection) => {
    return survey.content.filter(
      (section) =>
        section.questionName === question.questionName &&
        section.questionType.toLocaleLowerCase() ===
          question.questionType.toLocaleLowerCase()
    )[0];
  };

  return (
    <Box>
      <h3 className="bdd">{survey.surveyName}</h3>
      <>
        {questionsAndAnswers[currPage].content.map((question, index) => {
          return (
            <Box sx={{ borderRadius: '16px' }} key={index} className="may">
              <h1>{questionInfo(question).questionName}</h1>
              <AnswerSection
                answers={questionInfo(question).answers as IAnswer[]}
                questionType={questionInfo(question).questionType as string}
                selectedAnswerId={question.answers as string[]}
              />
            </Box>
          );
        })}
      </>
    </Box>
  );
}
export default QuestionName;

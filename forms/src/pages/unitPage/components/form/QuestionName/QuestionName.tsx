import AnswerSection from "../../AnswerSection/AnswerType/AnswerSection/AnswerSection";
import { IAnswer } from "../../../../../interfaces/answers/iAnswer";
import { ISurveyAnswers } from "../../../../../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../../../../../interfaces/questions/iSurvey";
import { ISection } from "../../../../../interfaces/answers/iSection";
import "./QuestionName.scss";
import { Box } from "@mui/material";

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
      <h1 className="survey-answer-unit_titel_div">{survey.surveyName}</h1>
      <>
        {questionsAndAnswers[currPage].content.map((question, index) => {
          return (
            <Box
              sx={{ borderRadius: "16px" }}
              key={index}
              className="survey-answer-unit_answers_box"
            >
              <Box>
                {questionInfo(question) ? (
                  <Box>
                    <h3 className="survey-answer-unit_question_name">
                      {questionInfo(question).questionName}
                    </h3>
                    <Box
                      sx={{ height: "75%" }}
                      className="survey-answer-unit_correct_answer"
                    >
                      <AnswerSection
                        answers={questionInfo(question).answers as IAnswer[]}
                        questionType={
                          questionInfo(question).questionType as string
                        }
                        selectedAnswerId={question.answers as string[]}
                      />
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Box>
          );
        })}
      </>
    </Box>
  );
}
export default QuestionName;

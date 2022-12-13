import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import "./RadioAnswerStatsSection.scss";

function RadioAnswerStatsSection({
  graphToCopy,
  questionList,
  answerList,
}: {
  graphToCopy: React.RefObject<unknown>;
  questionList: IQuestion[];
  answerList: ISurveyAnswers[];
}) {
  return <div className="radio-answer-stats-section-main"></div>;
}

export default RadioAnswerStatsSection;

import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import "./ShortAnswerStatsSection.scss";

function ShortAnswerStatsSection({
  graphToCopy,
  questionList,
  answerList,
}: {
  graphToCopy: React.RefObject<unknown>;
  questionList: IQuestion[];
  answerList: ISurveyAnswers[];
}) {
  return <div className="short-answer-stats-section-main"></div>;
}

export default ShortAnswerStatsSection;

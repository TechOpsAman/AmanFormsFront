import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import "./SelectAnswerStatsSection.scss";

function SelectAnswerStatsSection({
  graphToCopy,
  questionList,
  answerList,
}: {
  graphToCopy: React.RefObject<unknown>;
  questionList: IQuestion[];
  answerList: ISurveyAnswers[];
}) {
  return <div className="select-answer-stats-section-main"></div>;
}

export default SelectAnswerStatsSection;

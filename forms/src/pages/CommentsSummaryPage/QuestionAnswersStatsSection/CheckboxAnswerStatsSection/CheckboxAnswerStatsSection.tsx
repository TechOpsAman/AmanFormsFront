import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import CheckboxAnswerGraphSection from "./CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import "./CheckboxAnswerStatsSection.scss";

function CheckboxAnswerStatsSection({
  questionName,
  graphToCopy,
  answerList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  getNumberOfCommentsText: () => JSX.Element;
}) {
  return (
    <Card className="checkbox-answer-stats-section-main">
      <div className="checkbox-answer-stats-section-upper-section">
        <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText()}
      <CheckboxAnswerGraphSection />
    </Card>
  );
}

export default CheckboxAnswerStatsSection;

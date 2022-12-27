import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import CheckboxAnswerGraphSection from "../CheckboxAnswerStatsSection/CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import "./SelectAnswerStatsSection.scss";

function SelectAnswerStatsSection({
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
    <Card className="select-answer-stats-section-main">
      <div className="select-answer-stats-section-upper-section">
        <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText()}
      <CheckboxAnswerGraphSection
        answerList={answerList}
        questionName={questionName}
      />
    </Card>
  );
}

export default SelectAnswerStatsSection;

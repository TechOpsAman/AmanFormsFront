import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import CheckboxAnswerGraphSection from "./CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import "./CheckboxAnswerStatsSection.scss";

function CheckboxAnswerStatsSection({
  questionName,
  graphToCopy,
  answerList,
  questionList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: () => JSX.Element;
}) {
  return (
    <Card className="checkbox-answer-stats-section-main">
      <div className="checkbox-answer-stats-section-upper-section">
        <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText()}
      <CheckboxAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
      />
    </Card>
  );
}

export default CheckboxAnswerStatsSection;

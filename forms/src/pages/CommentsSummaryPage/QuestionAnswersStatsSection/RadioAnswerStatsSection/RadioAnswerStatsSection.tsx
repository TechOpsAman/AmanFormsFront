import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import RadioAnswerGraphSection from "./RadioAnswerGraphSection/RadioAnswerGraphSection";
import "./RadioAnswerStatsSection.scss";

function RadioAnswerStatsSection({
  questionName,
  graphToCopy,
  answerList,
  questionList,
  getNumberOfCommentsText,
  takeScreenshot,
}: {
  questionName: string;
  graphToCopy: React.RefObject<unknown>;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
  takeScreenshot:() => void;
}) {
  return (
    <Card className="radio-answer-stats-section-main">
      <div className="radio-answer-stats-section-upper-section">
        <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <RadioAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
      />
    </Card>
  );
}

export default RadioAnswerStatsSection;

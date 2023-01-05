import { useRef } from "react";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import CheckboxAnswerGraphSection from "./CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import "./CheckboxAnswerStatsSection.scss";

function CheckboxAnswerStatsSection({
  questionName,
  answerList,
  questionList,
  getNumberOfCommentsText,
  htmlInitialValue,
  takeScreenshot,
}: {
  questionName: string;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
  htmlInitialValue: HTMLElement;
  takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
}) {
  let graphToCopy = useRef<HTMLElement>(htmlInitialValue);

  return (
    <Card className="checkbox-answer-stats-section-main">
      <div className="checkbox-answer-stats-section-upper-section">
        <CopyButtonGraphComponent
          graphToCopyRef={graphToCopy}
          takeScreenshot={takeScreenshot}
        />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <CheckboxAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
        graphToCopy={graphToCopy}
      />
    </Card>
  );
}

export default CheckboxAnswerStatsSection;

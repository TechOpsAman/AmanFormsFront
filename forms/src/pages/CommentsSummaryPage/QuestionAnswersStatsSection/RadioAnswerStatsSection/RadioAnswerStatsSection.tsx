import { useRef } from "react";
import { Card } from "@mui/material";

import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import RadioAnswerGraphSection from "./RadioAnswerGraphSection/RadioAnswerGraphSection";
import "./RadioAnswerStatsSection.scss";

function RadioAnswerStatsSection({
  questionName,
  answerList,
  getNumberOfCommentsText,
  htmlInitialValue,
  takeScreenshot,
}: {
  questionName: string;
  answerList: ISurveyAnswers[];
  getNumberOfCommentsText: JSX.Element;
  htmlInitialValue: HTMLElement;
  takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
}) {
  let graphToCopy = useRef<HTMLElement>(htmlInitialValue);

  return (
    <Card
      style={{ boxShadow: "1px 2px 4px 1px rgb(131, 131, 131)",
      borderRadius: "30px" }}
      className="radio-answer-stats-section-main"
    >
      <div className="radio-answer-stats-section-upper-section">
        <CopyButtonGraphComponent
          graphToCopyRef={graphToCopy}
          takeScreenshot={takeScreenshot}
        />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <RadioAnswerGraphSection
        answerList={answerList}
        questionName={questionName}
        graphToCopy={graphToCopy}
      />
    </Card>
  );
}

export default RadioAnswerStatsSection;

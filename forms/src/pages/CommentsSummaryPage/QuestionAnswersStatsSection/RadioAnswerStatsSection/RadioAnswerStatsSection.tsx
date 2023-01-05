import { useRef } from "react";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import RadioAnswerGraphSection from "./RadioAnswerGraphSection/RadioAnswerGraphSection";
import "./RadioAnswerStatsSection.scss";

function RadioAnswerStatsSection({
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
    <Card className="radio-answer-stats-section-main">
      <div className="radio-answer-stats-section-upper-section">
        <CopyButtonGraphComponent
          graphToCopyRef={graphToCopy}
          takeScreenshot={takeScreenshot}
        />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <RadioAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
        graphToCopy={graphToCopy}
      />
    </Card>
  );
}

export default RadioAnswerStatsSection;

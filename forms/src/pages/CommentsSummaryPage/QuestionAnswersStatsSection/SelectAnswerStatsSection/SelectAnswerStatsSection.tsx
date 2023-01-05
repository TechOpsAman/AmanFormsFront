import { useRef } from "react";
import html2canvas from "html2canvas";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import SelectAnswerGraphSection from "./SelectAnswerGraphSection/SelectAnswerGraphSection";
import "./SelectAnswerStatsSection.scss";

function SelectAnswerStatsSection({
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
    <Card className="select-answer-stats-section-main">
      <div className="select-answer-stats-section-upper-section">
        <CopyButtonGraphComponent
          graphToCopyRef={graphToCopy}
          takeScreenshot={takeScreenshot}
        />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <SelectAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
        graphToCopy={graphToCopy}
      />
    </Card>
  );
}

export default SelectAnswerStatsSection;

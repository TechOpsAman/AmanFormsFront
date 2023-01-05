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
  // graphToCopy,
  answerList,
  questionList,
  getNumberOfCommentsText,
}: // takeScreenshot,
{
  questionName: string;
  // graphToCopy: React.RefObject<any>;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
  // takeScreenshot: (graphToCopy: React.MutableRefObject<HTMLElement>) => void;
}) {
  let element: HTMLElement;

  element = document.getElementById("number-of-comments-text") as HTMLElement;

  let graphToCopy = useRef<HTMLElement>(element);

  const onClickFunc = (newGraphToCopy: React.RefObject<any>) => {
    // graphToCopy = newGraphToCopy;
    // takeScreenshot();
  };
  const takeScreenshot = (graphToCopy: React.MutableRefObject<HTMLElement>) => {
    console.log(graphToCopy.current);

    html2canvas(graphToCopy.current).then((canvas) => {
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      console.log(canvas);
      console.log(dataURL);
      console.log(link);

      link.href = dataURL;
      link.download = "screenshot.png";
      link.click();
    });
  };

  return (
    <Card className="select-answer-stats-section-main">
      <div className="select-answer-stats-section-upper-section">
        <CopyButtonGraphComponent
          graphToCopyRef={graphToCopy}
          takeScreenshot={takeScreenshot}
          onClickFunc={onClickFunc}
        />
        <span className="question-name">{questionName}</span>
      </div>
      {getNumberOfCommentsText}
      <SelectAnswerGraphSection
        questionList={questionList}
        answerList={answerList}
        questionName={questionName}
        onClickFunc={onClickFunc}
        graphToCopy={graphToCopy}
      />
    </Card>
  );
}

export default SelectAnswerStatsSection;

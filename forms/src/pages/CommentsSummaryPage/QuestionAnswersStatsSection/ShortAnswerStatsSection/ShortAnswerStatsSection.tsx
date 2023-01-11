import * as Lodash from "lodash";
import { useRef } from "react";
import { Card } from "@mui/material";

import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../utils/InterfacesActions/ISurveyAnswersActions";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import ShortAnswerChartSection from "./ShortAnswerGraphSection/ShortAnswerChartSection";
import ShortAnswerGraphSection from "./ShortAnswerGraphSection/ShortAnswerGraphSection";
import "./ShortAnswerStatsSection.scss";

function ShortAnswerStatsSection({
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

  const didUsersAnswerSameAnswer = () => {
    const answers: Array<string[]> = [];
    let flag = false;

    const sectionsOfQuestion =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );

    sectionsOfQuestion.forEach((section) => {
      if (answers.some((answer) => Lodash.isEqual(answer, section.answers)))
        flag = true;
      else answers.push(section.answers);
    });

    return flag;
  };

  return (
    <div>
      <Card
        style={{ borderRadius: "30px" }}
        className="short-answer-stats-section-main"
      >
        {didUsersAnswerSameAnswer() ? (
          <>
            <div className="short-answer-stats-section-upper-section-graph">
              <CopyButtonGraphComponent
                graphToCopyRef={graphToCopy}
                takeScreenshot={takeScreenshot}
              />
              <span className="question-name">{questionName}</span>
            </div>
            {getNumberOfCommentsText}
            <ShortAnswerGraphSection
              answerList={answerList}
              questionName={questionName}
              questionList={questionList}
              graphToCopy={graphToCopy}
            />
            {/* גרף עמודות אנכי */}
          </>
        ) : (
          <div>
            <div className="short-answer-stats-section-upper-section-chart">
              <span className="question-name">{questionName}</span>
            </div>
            <div className="comments-number-div">{getNumberOfCommentsText}</div>
            <br />
            <ShortAnswerChartSection
              answerList={answerList}
              questionName={questionName}
              questionList={questionList}
            />
            {/* עמודות אופקיות */}
          </div>
        )}
      </Card>
    </div>
  );
}

export default ShortAnswerStatsSection;

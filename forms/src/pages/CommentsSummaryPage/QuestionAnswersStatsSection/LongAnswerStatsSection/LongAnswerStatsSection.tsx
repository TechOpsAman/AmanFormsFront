import * as Lodash from "lodash";
import { Card } from "@material-ui/core";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import ISurveyAnswersActions from "../../../../utils/InterfacesActions/ISurveyAnswersActions";
import LongAnswerGraphSection from "./LongAnswerGraphSection/LongAnswerGraphSection";
import "./LongAnswerStatsSection.scss";

function LongAnswerStatsSection({
  questionName,
  answerList,
  questionList,
  getNumberOfCommentsText,
}: {
  questionName: string;
  answerList: ISurveyAnswers[];
  questionList: IQuestion[];
  getNumberOfCommentsText: JSX.Element;
}) {
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
      <Card className="long-answer-stats-section-main">
        <div>
          <>{console.log(didUsersAnswerSameAnswer())}</>
          <div className="long-answer-stats-section-upper-section-chart">
            <span className="question-name">{questionName}</span>
          </div>
          <div className="comments-number-div">{getNumberOfCommentsText}</div>
          <br />
          <LongAnswerGraphSection
            answerList={answerList}
            questionName={questionName}
            questionList={questionList}
          />
          {/* עמודות אופקיות */}
        </div>
      </Card>
    </div>
  );
}

export default LongAnswerStatsSection;

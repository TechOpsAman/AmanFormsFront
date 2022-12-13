import { Card } from "@material-ui/core";
import { ISection } from "../../../../interfaces/answers/iSection";
import { ISurveyAnswers } from "../../../../interfaces/answers/iSurvey";
import TestsOnArrays from "../../../../utils/testsOnArrays";
import CheckboxAnswerGraphSection from "../CheckboxAnswerStatsSection/CheckboxAnswerGraphSection/CheckboxAnswerGraphSection";
import CopyButtonGraphComponent from "../CopyButtonGraphComponent";
import "./ShortAnswerStatsSection.scss";

function ShortAnswerStatsSection({
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
  const getArrayOfSectionsAccordingToQuestionName = (): ISection[] => {
    const usersQuestionAnswerAndQuestionName: ISection[] = [];
    answerList.forEach((surveyAnswers) => {
      let section = surveyAnswers.content.find((section) => {
        return section.questionName === questionName;
      });
      if (section) usersQuestionAnswerAndQuestionName.push(section);
    });
    return usersQuestionAnswerAndQuestionName;
  };

  const didUsersAnswersSameAnswer = () => {
    const occurrenceOfAnswerInSectionArray =
      TestsOnArrays.getOccurrenceOfAnswerInSectionArray(
        getArrayOfSectionsAccordingToQuestionName()
      );
    let flag: boolean = false;

    occurrenceOfAnswerInSectionArray.forEach((occurrenceOfAnswerInSection) => {
      if (occurrenceOfAnswerInSection[1] > 1) flag = true;
    });

    return flag;
  };

  return (
    <div>
      {didUsersAnswersSameAnswer() ? (
        <Card className="short-answer-stats-section-main">
          <div className="short-answer-stats-section-upper-section">
            <CopyButtonGraphComponent graphToCopyRef={graphToCopy} />
            <span className="question-name">{questionName}</span>
          </div>
          {getNumberOfCommentsText()}
          <CheckboxAnswerGraphSection />
        </Card>
      ) : (
        <div></div> // TODO: chane to the other shape of info (not graph)!!!
      )}
    </div>
  );
}

export default ShortAnswerStatsSection;

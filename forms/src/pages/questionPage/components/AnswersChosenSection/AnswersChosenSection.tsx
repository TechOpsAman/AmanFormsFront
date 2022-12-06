import { Card } from "@material-ui/core";
import { ISurvey } from "../../../../interfaces/answers/iSurvey";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";

function AnswersChosenSection({
  questionList,
  answerList,
  chosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  answerList: ISurvey;
}) {
  return <Card className="answers-chosen-section-main"></Card>;
}

export default AnswersChosenSection;

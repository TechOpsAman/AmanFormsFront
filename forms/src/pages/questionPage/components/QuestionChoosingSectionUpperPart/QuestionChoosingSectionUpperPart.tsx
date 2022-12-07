import "./QuestionChoosingSectionUpperPart.scss";
import { Card } from "@material-ui/core";
import { IQuestion } from "../../../../interfaces/questions/iQuestion";
import QuestionChoosingByIndexSection from "./QuestionChoosingByIndexSection/QuestionChoosingByIndexSection";
import QuestionChoosingByNameSection from "./QuestionChoosingByNameSection/QuestionChoosingByNameSection";

function QuestionChoosingSectionUpperPart({
  questionList,
  chosenQuestion,
  setChosenQuestion,
}: {
  questionList: IQuestion[];
  chosenQuestion: IQuestion;
  setChosenQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
}) {
  return (
    <Card className="question-choosing-section-upper-part-main">
      <QuestionChoosingByIndexSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingByIndexSection>
      <QuestionChoosingByNameSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      ></QuestionChoosingByNameSection>
    </Card>
  );
}

export default QuestionChoosingSectionUpperPart;
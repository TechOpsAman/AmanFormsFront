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
    <Card
      className="question-choosing-section-upper-part-main"
      style={{ borderRadius: "30px" }}
    >
      <QuestionChoosingByIndexSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      />
      <QuestionChoosingByNameSection
        questionList={questionList}
        chosenQuestion={chosenQuestion}
        setChosenQuestion={setChosenQuestion}
      />
    </Card>
  );
}

export default QuestionChoosingSectionUpperPart;

import "./QuestionChoosingSection.scss";
import { Card } from "@material-ui/core";
import { useState } from "react";
import { IQuestion } from "../../../../interfaces/iQuestion";
import QuestionChoosingByIndexSection from "./QuestionChoosingByIndexSection/QuestionChoosingByIndexSection";
import QuestionChoosingByNameSection from "./QuestionChoosingByNameSection/QuestionChoosingByNameSection";

function QuestionChoosingSection({
  questionList,
}: {
  questionList: IQuestion[];
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return (
    <Card className="question-choosing-section-main">
      <div className="choose-by-index-section">
        <QuestionChoosingByIndexSection
          questionList={questionList}
        ></QuestionChoosingByIndexSection>
      </div>
      <div className="choose-by-name-section">
        <QuestionChoosingByNameSection
          questionList={questionList}
        ></QuestionChoosingByNameSection>
      </div>
    </Card>
  );
}

export default QuestionChoosingSection;

import { useState } from "react";
import { IQuestion } from "../../../../interfaces/iQuestion";

function QuestionChoosingSection({
  questionList,
}: {
  questionList: IQuestion[];
}) {
  const [chosenQuestion, setChosenQuestion] = useState<IQuestion>(
    questionList[questionList.length - 1]
  );

  return <div></div>;
}

export default QuestionChoosingSection;

import { Box } from "@mui/material";
import RtlProvider from "../../../../../../components/forms/RtlProvider";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import { QuestionType } from "../../../../../../interfaces/answers/iSection";
import CheckboxAnswer from "../CheckboxAnswer/CheckboxAnswer";
import OpenAnswer from "../OpenAnswer/OpenAnswer";
import RadioAnswer from "../RadioAnswer/RadioAnswer";
import SelectAnswer from "../SelectAnswer/SelectAnswer";
import "./AnswerSection.scss";

function AnswerSection({
  answers,
  questionType,
  selectedAnswerId,
}: {
  answers: IAnswer[];
  questionType: string;
  selectedAnswerId: string[];
}) {
  const handelAnswers = () => {
    switch (questionType) {
      case QuestionType.checkbox:
        return (
          <Box className="survey-answer-unit_answers_div">
            <CheckboxAnswer
              answers={answers as IAnswer[]}
              selectedAnswerId={selectedAnswerId as string[]}
            />
          </Box>
        );
      case QuestionType.select:
        return (
          <Box className="survey-answer-unit_answers_div">
            <SelectAnswer
              answers={answers as IAnswer[]}
              selectedAnswerId={selectedAnswerId as string[]}
            />
          </Box>
        );
      case QuestionType.radio:
        return (
          <Box className="survey-answer-unit_answers_div">
            <RadioAnswer
              answers={answers as IAnswer[]}
              selectedAnswerId={selectedAnswerId as string[]}
            />
          </Box>
        );
      case QuestionType.shortAnswer:
      case QuestionType.longAnswer:
        return (
          <Box className="survey-answer-unit_answers_div">
            <OpenAnswer selectedAnswerId={selectedAnswerId as string[]} />
          </Box>
        );
      default:
    }
  };

  return (
    <RtlProvider>
      <Box sx={{ padding: "1rem" }}>
        <>{handelAnswers()}</>
      </Box>
    </RtlProvider>
  );
}

export default AnswerSection;

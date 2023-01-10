import { Box } from "@material-ui/core";
import RtlProvider from "../../../../../../components/forms/RtlProvider";
import { IAnswer } from "../../../../../../interfaces/questions/iAnswer";
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
    switch (questionType.toLocaleLowerCase()) {
      case "checkbox":
        return (
          <Box className="survey-answer-unit_answers_div">
            {
              <CheckboxAnswer
                answers={answers as IAnswer[]}
                selectedAnswerId={selectedAnswerId as string[]}
              />
            }
          </Box>
        );
      case "select":
        return (
          <Box className="survey-answer-unit_answers_div">
            {
              <SelectAnswer
                answers={answers as IAnswer[]}
                selectedAnswerId={selectedAnswerId as string[]}
              />
            }
          </Box>
        );
      case "radio":
        return (
          <Box className="survey-answer-unit_answers_div">
            {
              <RadioAnswer
                answers={answers as IAnswer[]}
                selectedAnswerId={selectedAnswerId as string[]}
              />
            }
          </Box>
        );
      case "short_answer":
        return (
          <Box className="survey-answer-unit_answers_div">
            {<OpenAnswer selectedAnswerId={selectedAnswerId as string[]} />}
          </Box>
        );
      case "long_answer":
        return (
          <Box className="survey-answer-unit_answers_div">
            {<OpenAnswer selectedAnswerId={selectedAnswerId as string[]} />}
          </Box>
        );
      default:
    }
  };

  return (
    <RtlProvider>
      <Box sx={{ padding: "5%" }}>
        <>{handelAnswers()}</>
      </Box>
    </RtlProvider>
  );
}

export default AnswerSection;

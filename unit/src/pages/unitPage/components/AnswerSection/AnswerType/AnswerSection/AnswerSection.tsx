import { Box } from "@material-ui/core";
import { Answer } from "../../../../../../interfaces/iAnswer";
import CheckboxAnswer from "../CheckboxAnswer/CheckboxAnswer";
import OpenAnswer from "../OpenAnswer/OpenAnswer";
import RadioAnswer from "../RadioAnswer/RadioAnswer";
import SelectAnswer from "../SelectAnswer/SelectAnswer";

function AnswerSection({ answers, questionType, selectedAnswerId }: { answers: Answer[], questionType: string, selectedAnswerId: string[] }) {
const handelAnswers = () => {
    switch (questionType) {
        case "checkbox":
            return (<Box className="survey-answer-unit_answers_div"> {<CheckboxAnswer answers={answers as Answer[]} selectedAnswerId={selectedAnswerId as string[]}/>} </Box>)
        case "select":
            return(<Box className="survey-answer-unit_answers_div">{<SelectAnswer answers={answers as Answer[]} selectedAnswerId={selectedAnswerId as string[]} />}</Box>)
        case "radio":
          return(<Box className="survey-answer-unit_answers_div">{<RadioAnswer answers={answers as Answer[]} selectedAnswerId={selectedAnswerId as string[]} />}</Box>)
        case "shortAnswer":
          return(<Box className="survey-answer-unit_answers_div">{<OpenAnswer selectedAnswerId={selectedAnswerId as string[]} />}</Box>)
        case "longAnswer":
          return(<Box className="survey-answer-unit_answers_div">{<OpenAnswer selectedAnswerId={selectedAnswerId as string[]} />}</Box>)
        default:
            
    }
}

  return (
    <Box>
      <>{handelAnswers()}</>
    </Box>
  );
}

export default AnswerSection;

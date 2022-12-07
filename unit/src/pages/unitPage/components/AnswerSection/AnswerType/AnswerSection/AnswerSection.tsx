import { Box } from "@material-ui/core";
import { Answer } from "../../../../../../interfaces/iAnswer";
import CheckboxAnswer from "../CheckboxAnswer/CheckboxAnswer";
import SelectAnswer from "../SelectAnswer/SelectAnswer";

function AnswerSection({ answers, questionType, selectedAnswerId }: { answers: Answer[], questionType: string, selectedAnswerId: string[] }) {
const handelAnswers = () => {
    switch (questionType) {
        case "checkbox":
            return (<Box className="survey-answer-unit_checkbox_question"> {<CheckboxAnswer answers={answers as Answer[]} selectedAnswerId={selectedAnswerId as string[]}/>} </Box>)
        case "select":
            return(<Box className="survey-answer-unit_checkbox_question">{<SelectAnswer answers={answers as Answer[]} selectedAnswerId={selectedAnswerId as string[]} />}</Box>)
    
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

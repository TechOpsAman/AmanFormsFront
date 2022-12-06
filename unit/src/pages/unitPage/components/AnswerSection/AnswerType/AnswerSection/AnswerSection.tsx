import { Box } from "@material-ui/core";
import { Answer } from "../../../../../../interfaces/iAnswer";
import CheckboxAnswer from "../CheckboxAnswer/CheckboxAnswer";

function AnswerSection({ answers, questionType }: { answers: Answer[], questionType: string }) {
const handelAnswers = (selectedAnswer: string) => {
    switch (questionType) {
        case "checkbox":
            return (<Box className="survey-answer-unit_checkbox_question"> {<CheckboxAnswer answers={answers as Answer[]} />} </Box>)
         break;
    
        default:
            break;
    }
}

  return (
    <Box>
      <>{handelAnswers('123')}</>
      {answers.map((answer, index) => 
        <>{answer.answer}</>
      )}
    </Box>
  );
}

export default AnswerSection;

import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../services/questionsService";
import { useLocation } from "react-router-dom";

function SelectAnswer({
  answer,
  index,
  questionIndex,
}: {
  answer: IAnswer;
  index: number;
  questionIndex: number;
}) {
  const location = useLocation();
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

    useEffect(() => {
    if (!(answer.answer === "" || !answer.answer)) setNewAnswer(answer.answer);
  }, [answer]);
  
  useEffect(() => {
    if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") as string);
  }, []);

  return (
    <div className="select-answer-container">
      <div className="select-answer_input_wrapper">
        <input
          type="text"
          className="survey-section-answer"
          value={newAnswer}
          onChange={(e) => {
            setNewAnswer(e.target.value);
            const temp = sections[questionIndex].answers as IAnswer[];
            temp[index].answer = e.target.value;
            sections[questionIndex].answers = temp;
            updateContent(location.state.survey.id, sections);
          }}
        />
      </div>
      <h3>.{index+1}</h3>
    </div>
  );
}

export default SelectAnswer;

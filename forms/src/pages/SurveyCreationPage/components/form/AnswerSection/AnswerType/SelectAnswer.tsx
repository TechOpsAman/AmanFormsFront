import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../data/axios/questionsService";
import { useLocation } from "react-router-dom";

function SelectAnswer({
  answer,
  index,
  questionIndex,
}: {
  answer: iAnswer;
  index: number;
  questionIndex: number;
}) {
  const location = useLocation();
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

  if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") as string);

  useEffect(() => {
    setNewAnswer(answer.answer);
  }, [answer]);

  return (
    <div className="select-answer-container">
      <div className="select-answer_input_wrapper">
        <input
          type="text"
          className="survey-section-answer"
          value={newAnswer}
          onChange={(e) => {
            setNewAnswer(e.target.value);
            const temp = sections[questionIndex].answers as iAnswer[];
            temp[index].answer = e.target.value;
            sections[questionIndex].answers = temp;
            updateContent(location.state.survey.id, sections);
          }}
        />
      </div>
      <h3>.{index}</h3>
    </div>
  );
}

export default SelectAnswer;

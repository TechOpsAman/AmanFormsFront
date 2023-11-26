import "./SingleAnswer.scss";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../services/questionsService";
import { useLocation } from "react-router-dom";

function SelectAnswer({
  answer,
  index,
  questionIndex,
  answers,
}: {
  answer: IAnswer;
  index: number;
  questionIndex: number;
  answers: IAnswer[];
}) {
  const location = useLocation();
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

  return (
    <div className="select-answer-container">
      <input
        placeholder="הוסף תשובה"
        type="text"
        className="survey-section-answer"
        value={answer.answer}
        onChange={(e) => {
          setNewAnswer(e.target.value);
          const temp = sections[questionIndex].answers as IAnswer[];
          temp[index].answer = e.target.value;
          sections[questionIndex].answers = temp;
          updateContent(location.state.survey.id, sections);
        }}
        onBlur={(e) => {
          if (!e.target.value) {
            setNewAnswer(t("newAnswer") + " " + (index + 1));
            const temp = sections[questionIndex].answers as IAnswer[];
            temp[index].answer = t("newAnswer") + " " + (index + 1);
            sections[questionIndex].answers = temp;
            updateContent(location.state.survey.id, sections);
          } else {
            answers.forEach((tAnswer, tIndex) => {
              if (tAnswer.answer === answer.answer && tIndex !== index) {
                setNewAnswer(t("newAnswer") + " " + (index + 1));
                const temp = sections[questionIndex].answers as IAnswer[];
                temp[index].answer = t("newAnswer") + " " + (index + 1);
                sections[questionIndex].answers = temp;
                updateContent(location.state.survey.id, sections);
                return;
              }
            });
          }
        }}
      />
      <h3>.{index + 1}</h3>
    </div>
  );
}

export default SelectAnswer;

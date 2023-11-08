import "./SingleAnswer.scss";
import { useContext, useEffect, useInsertionEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import Checkbox from "@mui/material/Checkbox";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../services/questionsService";
import { useLocation } from "react-router-dom";

function CheckBoxAnswer({
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
  const sections = useContext(sectionsContext);

  const location = useLocation();
  const { t } = useTranslation();

  const [newAnswer, setNewAnswer] = useState(answer.answer);

  useEffect(() => {
    if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") + index);
  }, []);

  return (
    <div className="check_box_answer-checkbox-container">
      <div className="check_box_answer_wrapper">
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
                //console.log(tAnswer.answer, answer.answer);

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
      </div>
      <div className="checkbox">
        <Checkbox disabled />
      </div>
    </div>
  );
}

export default CheckBoxAnswer;

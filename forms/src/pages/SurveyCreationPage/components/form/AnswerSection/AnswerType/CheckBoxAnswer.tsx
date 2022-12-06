import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import Checkbox from "@mui/material/Checkbox";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../data/axios/questionsService";
import { useLocation } from "react-router-dom";

function CheckBoxAnswer({
  answer,
  index,
  questionIndex,
}: {
  answer: iAnswer;
  index: number;
  questionIndex: number;
}) {
  const sections = useContext(sectionsContext);

  const location = useLocation();
  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

  if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") as string);

  useEffect(() => {
    setNewAnswer(answer.answer);
  }, [answer]);

  return (
    <div className="check_box_answer-checkbox-container">
      <div className="check_box_answer_wrapper">
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
      <div className="checkbox">
        <Checkbox disabled />
      </div>
    </div>
  );
}

export default CheckBoxAnswer;

import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import Checkbox from "@mui/material/Checkbox";
import { sectionsContext } from "../../../../../../context/sectionsContext";

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
          }}
        />
      </div>
      <Checkbox disabled />
    </div>
  );
}

export default CheckBoxAnswer;

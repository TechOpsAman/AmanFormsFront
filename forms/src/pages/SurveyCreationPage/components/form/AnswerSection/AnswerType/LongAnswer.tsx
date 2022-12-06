import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { useLocation } from "react-router-dom";
import { updateContent } from "../../../../../../data/axios/questionsService";

function LongAnswer({
  answer,
  questionIndex,
}: {
  answer: iAnswer;
  questionIndex: number;
}) {
  const location = useLocation()
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

  if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") as string);

  useEffect(() => {
    setNewAnswer(answer.answer);
  }, [answer]);

  return (
    <input
      type="text"
      className="survey-section-answer"
      value={newAnswer}
      onChange={(e) => {
        setNewAnswer(e.target.value);
        sections[questionIndex].answers = [{ answer: e.target.value }];
        updateContent(location.state.survey.id, sections);
      }}
    />
  );
}

export default LongAnswer;

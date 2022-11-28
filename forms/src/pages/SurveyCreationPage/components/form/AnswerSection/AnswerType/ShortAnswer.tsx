import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";

function ShortAnswer({
  answer,
  questionIndex,
}: {
  answer: iAnswer;
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
    <input
      type="text"
      className="survey-section-answer"
      value={newAnswer}
      onChange={(e) => {
        setNewAnswer(e.target.value);
        sections[questionIndex].answers = [{ answer: e.target.value }];
      }}
    />
  );
}

export default ShortAnswer;

import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";

function LongAnswer(props: { answer: iAnswer; questionIndex: number }) {
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [answer, setAnswer] = useState(props.answer.answer);

  if (!answer || answer === "") setAnswer(t("newAnswer") as string);

  useEffect(() => {
    setAnswer(props.answer.answer);
  }, [props.answer]);

  return (
    <input
      type="text"
      className="survey-section-answer"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
        sections[props.questionIndex].answers = [{ answer: e.target.value }];
      }}
    />
  );
}

export default LongAnswer;

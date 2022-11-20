import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iAnswer } from "../../../../../../interfaces/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";

function RadioAnswer(props: {
  answer: iAnswer;
  index: number;
  questionIndex: number;
}) {
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [answer, setAnswer] = useState(props.answer.answer);

  if (!answer || answer === "") setAnswer(t("newAnswer") as string);

  useEffect(() => {
    setAnswer(props.answer.answer);
  }, [props.answer]);

  return (
    <div>
      <input
        type="text"
        className="survey-section-answer"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          const temp = sections[props.questionIndex].answers as iAnswer[];
          temp[props.index].answer = e.target.value;
          sections[props.questionIndex].answers = temp;
        }}
      />
      <input type="radio" disabled />
    </div>
  );
}

export default RadioAnswer;

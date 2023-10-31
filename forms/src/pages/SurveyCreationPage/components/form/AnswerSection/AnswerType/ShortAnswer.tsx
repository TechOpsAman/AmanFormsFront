import "./SingleAnswer.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IAnswer } from "../../../../../../interfaces/answers/iAnswer";
import { sectionsContext } from "../../../../../../context/sectionsContext";
import { updateContent } from "../../../../../../services/questionsService";
import { useLocation } from "react-router-dom";

function ShortAnswer({
  answer,
  questionIndex,
}: {
  answer: IAnswer;
  questionIndex: number;
}) {
  const location = useLocation();
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();
  const [newAnswer, setNewAnswer] = useState(answer.answer);

  useEffect(() => {
    if (!(answer.answer === "" || !answer.answer)) setNewAnswer(answer.answer);
  }, [answer]);

  // useEffect(() => {
  //   if (!newAnswer || newAnswer === "") setNewAnswer(t("newAnswer") as string);
  // }, []);

  return (
    <input
      placeholder="הוסף תשובה"
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

export default ShortAnswer;

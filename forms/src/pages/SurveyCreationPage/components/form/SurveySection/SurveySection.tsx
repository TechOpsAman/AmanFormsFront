import "./SurveySection.scss";
import { iQuestion, QuestionType } from "../../../../../interfaces/iQuestion";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { iAnswer } from "../../../../../interfaces/iAnswer";
import AnswersSection from "../AnswerSection/AnswersSection";
import QuestionTypeSelection from "../QuestionTypeSelection/QuestionTypeSelection";
import Button from "@mui/material/Button";
import { sectionsContext } from "../../../../../context/sectionsContext";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

function SurveySection(props: { section: iQuestion; index: number }) {
  const sections = useContext(sectionsContext);

  const { t } = useTranslation();

  const [questionType, setQuestionType] = useState(props.section.questionType);
  const [questionName, setQuestionName] = useState(props.section.questionName);
  const [answers, setAnswers] = useState(props.section.answers);

  const handleQuestionNameCallBack = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(e.target.value);
    sections[props.index].questionName = e.target.value;
  };

  const handleAddAnswer = () => {
    sections[props.index].answers = [
      ...(sections[props.index].answers as iAnswer[]),
      { answer: "" },
    ];
    setAnswers([...(answers as iAnswer[]), { answer: "" }]);
  };

  const handleRemoveAnswer = (answerIndex: number) => {
    setAnswers([
      ...(answers as iAnswer[]).slice(0, answerIndex),
      ...(answers as iAnswer[]).slice(answerIndex + 1),
    ]);
  };

  const handleQuestionTypeChange = (newType: QuestionType) => {
    setQuestionType(newType);
  };

  useEffect(() => {
    const checkQuestionName = () => {
      if (!questionName || questionName === "")
        setQuestionName(t("newQuestion") as string);
    };

    setQuestionName(sections[props.index].questionName);
    setQuestionType(sections[props.index].questionType);
    setAnswers(sections[props.index].answers);
    checkQuestionName();
  }, [
    props.index,
    props.section.answers,
    props.section.questionName,
    props.section.questionType,
    questionName,
    sections,
    t,
  ]);

  return (
    <div className="survey-section-container">
      <div className="survery-section-drag-indicatior-container">
        <DragIndicatorRoundedIcon fontSize="large" color="inherit"/>
      </div>
      <div className="survey-section-input-type-question-name-container">
        <div className="survey-section-input_question_type">
          <QuestionTypeSelection
            selected={questionType}
            handleQuestionTypeChange={handleQuestionTypeChange}
            index={props.index}
          />
          <span className="survey-section-input_question_type_text">
            {t("questionType")}
          </span>
        </div>

        <input
          type="text"
          className="survey-section-input_question_name"
          value={questionName}
          onChange={(e) => {
            handleQuestionNameCallBack(e);
          }}
        />
      </div>
      <div className="survey-section-answers-wrapper">
        <AnswersSection
          answers={answers as iAnswer[]}
          questionType={questionType}
          handleRemoveAnswer={handleRemoveAnswer}
          questionIndex={props.index}
        />
      </div>
      <div className="survey-section_add_answer">
        <Button variant="outlined" onClick={handleAddAnswer}>
          {t("addAnswer")}
        </Button>
      </div>
    </div>
  );
}

export default SurveySection;

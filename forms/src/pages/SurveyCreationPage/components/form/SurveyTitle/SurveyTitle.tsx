import "./SurveyTitle.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SurveyTitle(props: { surveyName: string }) {
  const { t } = useTranslation();

  const [surveyName, setSurveyName] = useState(props.surveyName);
  const [surveyDescription, setSurveyDescription] = useState(t('surveyDescription') as string);

  if (surveyName === "" || !surveyName) setSurveyName(t('newSurvey') as string);

  return (
    <div className="survey-title-container">
      <input type='text' className='survey-title-text-input_survey_name' value={surveyName} onChange={(e) => {setSurveyName(e.target.value)}}/>
      <input type='text' className='survey-title-text-input_survey_description' value={surveyDescription} onChange={(e) => {setSurveyDescription(e.target.value)}}/>
    </div>
  );
}

export default SurveyTitle;

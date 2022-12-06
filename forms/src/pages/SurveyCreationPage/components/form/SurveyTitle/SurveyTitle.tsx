import "./SurveyTitle.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { updateSurvey } from "../../../../../services/questionsService";

function SurveyTitle({
  surveyName,
  surveyDescription,
  surveyId,
}: {
  surveyName: string;
  surveyDescription: string;
  surveyId: string;
}) {
  const { t } = useTranslation();

  const [newSurveyName, setNewSurveyName] = useState(surveyName);
  const [newSurveyDescription, setNewSurveyDescription] = useState(
    surveyDescription !== ""
      ? surveyDescription
      : (t("surveyDescription") as string)
  );

  if (newSurveyName === "" || !newSurveyName)
    setNewSurveyName(t("newSurvey") as string);

  return (
    <div className="survey-title-container">
      <input
        type="text"
        className="survey-title-text-input_survey_name"
        value={newSurveyName}
        onChange={(e) => {
          setNewSurveyName(e.target.value);
          updateSurvey(surveyId, (surveyName = e.target.value));
        }}
      />
      <input
        type="text"
        className="survey-title-text-input_survey_description"
        value={newSurveyDescription}
        onChange={(e) => {
          setNewSurveyDescription(e.target.value);
          updateSurvey(
            surveyId,
            (surveyName = newSurveyName),
            (surveyDescription = e.target.value)
          );
        }}
      />
    </div>
  );
}

export default SurveyTitle;

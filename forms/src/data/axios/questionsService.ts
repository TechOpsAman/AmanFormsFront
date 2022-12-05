import { config } from "../config/config";
import axios from "axios";
import { iSurvey } from "../../interfaces/iSurvey";

export const getAll = async () => {
  return axios
    .get(`${config.questionsService.questionsCrudConnectionString}/getAll`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const postSurvey = async (survey: iSurvey) => {
  console.log(survey);
  return axios
    .post(
      `${config.questionsService.questionsCrudConnectionString}/createSurvey`,
      {
        surveyName: survey.surveyName,
        surveyDescription: survey.surveyDescription,
        creatorId: survey.creatorId,
        content: survey.content,
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

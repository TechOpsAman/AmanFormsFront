import { config } from "../data/config/config";
import axios from "axios";
import { iSurvey } from "../interfaces/iSurvey";
import { iQuestion } from "../interfaces/iQuestion";

export const getAll = async () => {
  return axios
    .get(`${config.questionsService.questionsCrudConnectionString}/getAll`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const getById = async (surveyId: string) => {
  return axios
    .get(
      `${config.questionsService.questionsCrudConnectionString}/getSurveyById?id=${surveyId}`
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const updateContent = async (surveyId: string, content: iQuestion[]) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateContent`,
      {
        surveyId: surveyId,
        content: content,
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const updateLastUpdated = async (surveyId: string) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateLastUpdated?id=${surveyId}`
    )
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

export const updateSurvey = async (
  surveyId: string,
  surveyName?: string,
  surveyDescription?: string,
  content?: any[]
) => {
  let temp = {};
  temp = { ...temp, surveyId: surveyId };
  if (surveyName && surveyName.length > 0)
    temp = { ...temp, surveyName: surveyName };
  if (surveyDescription && surveyDescription.length > 0)
    temp = { ...temp, surveyDescription: surveyDescription };
  if (content && content.length > 0) temp = { ...temp, content: content };

  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateSurvey`,
      temp
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const updateIsOpen = async (surveyId: string, isOpen: boolean) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateIsOpen`,
      {
        surveyId: surveyId,
        isOpen: isOpen,
      }
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};
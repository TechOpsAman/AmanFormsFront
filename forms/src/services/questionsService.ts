import { config } from "../data/config/config";
import axios from "axios";
import { ISurveyQuestions } from "../interfaces/questions/iSurvey";
import { IQuestion } from "../interfaces/questions/iQuestion";

export const getAll = async (user: string) => {
  return axios
    .get(
      `${config.questionsService.questionsCrudConnectionString}/getAll?creatorId=${user}`
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};

export const getById = async (surveyId: string) => {
  return axios
    .get(
      `${config.questionsService.questionsCrudConnectionString}/getSurveyById?id=${surveyId}`
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};

export const updateContent = async (surveyId: string, content: IQuestion[]) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateContent`,
      {
        surveyId: surveyId,
        content: content,
      }
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};

export const updateLastUpdated = async (surveyId: string) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateLastUpdated?id=${surveyId}`
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};

export const postSurvey = async (survey: Partial<ISurveyQuestions>) => {
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
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
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
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
      console.log(err);
    });
};

export const updateRepliers = async (surveyId: string, replier: string) => {
  return axios
    .put(
      `${config.questionsService.questionsCrudConnectionString}/updateRepliers`,
      {
        surveyId: surveyId,
        repliers: replier,
      }
    )
    .then((res: { data: any }) => res.data)
    .catch((err: any) => {
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
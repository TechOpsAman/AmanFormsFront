import { config } from "../data/config/config";
import axios from "axios";
import { ISurveyAnswers } from "../interfaces/answers/iSurvey";
import { string } from "joi";
export default class AnswerService {
  static postAnswerSurvey = async (survey: ISurveyAnswers) => {
    const { data } = await axios.post(
      `${config.answersService.answersCrudConnectionString}/`,
      {
        surveyId: survey.surveyId,
        userId: survey.userId,
        content: survey.content,
      }
    );
    return data;
  };

  static getAnswerSurvey = async (surveyId: string) => {
    const { data } = await axios.get(
      `${config.answersService.answersCrudConnectionString}/getSurveysById?surveyId=${surveyId}`
    );
    return data;
  };
}

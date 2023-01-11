import axios from "axios";
import { ISurveyAnswers } from "../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../interfaces/questions/iSurvey";
import { config } from "../config";

export default class CompositorService {
  static async getSurveyQuestionsAndUsersAnswers(
    surveyId: string
  ): Promise<(ISurveyQuestions | ISurveyAnswers[])[]> {
    return axios
      .get(
        `${config.compositor.compositorConnectionString}/getSurveyResults?surveyId=${surveyId}`
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        if (err.response.status !== 404) console.log(err);
      });
  }
}

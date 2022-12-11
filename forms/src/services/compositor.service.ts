import axios from "axios";
import { ISurveyAnswers } from "../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../interfaces/questions/iSurvey";

export default class CompositorService {
  static api = "http://compositor:3003/api/compositor";

  static async getSurveyQuestionsAndUsersAnswers(
    surveyId: string
  ): Promise<(ISurveyQuestions | ISurveyAnswers)[]> {
    const surveyQuestionsAndUsersAnswers = await axios
      .get(`${CompositorService.api}/getSurveyResults?surveyId=${surveyId}`)
      .then((res) => res.data);

    return surveyQuestionsAndUsersAnswers;
  }
}

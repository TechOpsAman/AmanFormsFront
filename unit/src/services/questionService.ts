import { config } from "../data/config/config";
import axios from "axios";
import { ISurveyAnswers } from "../interfaces/answers/iSurvey";
import { ISurveyQuestions } from "../interfaces/questions/iSurvey";



  export default class CompositorService {
    static async getSurveyQuestionsAndUsersAnswers(
      surveyId: string
    ): Promise<(ISurveyQuestions | ISurveyAnswers[])[]> { 
      return axios
        .get(
          `${config.compositor.compositorConnectionString}/getSurveyResults?surveyId=${surveyId}`
        )
        .then((res) => res.data)
        .catch((err) => {
          if (err.response.status !== 404) console.log(err);
        });
    }
  }
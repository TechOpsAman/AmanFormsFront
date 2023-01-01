import { config } from "../data/config/config";
import axios from "axios";

export default class QuestionService {
    static getSurveyQuestions = async (surveyId: string) => {
        const { data } = await axios.get(`${config.questionsService.questionsCrudConnectionString}/getSurveyById?id=${surveyId}`);
        return data;
    }
}
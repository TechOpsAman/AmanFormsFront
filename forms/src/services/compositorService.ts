import { config } from "../data/config/config";
import axios from "axios";

export const deleteSurveyById = async (surveyId: string) => {
  return axios
    .delete(
      `${config.compositor.compositorConnectionString}/deleteSurvey?surveyId=${surveyId}`
    )
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status !== 404) console.log(err);
    });
};

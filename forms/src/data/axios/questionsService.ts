import { config } from "../config/config";
import axios from "axios";

export const getAll = async () => {
  return axios
    .get(`${config.questionsService.questionsCrudConnectionString}/getAll`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

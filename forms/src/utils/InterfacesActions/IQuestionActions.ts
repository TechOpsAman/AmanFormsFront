import { IQuestion } from "../../interfaces/questions/iQuestion";

export default class IQuestionActions {
  static getQuestionAccordingToName(
    questionName: string,
    questionList: IQuestion[]
  ): IQuestion | undefined {
    const question = questionList.find((question) => {
      return question.questionName === questionName;
    });
    return question;
  }
}

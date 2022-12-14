import { ISection } from "../interfaces/answers/iSection";
import { ISurveyAnswers } from "../interfaces/answers/iSurvey";

export default class ISurveyAnswersActions {
  // returns an array of [[(1. answer), (2. how many times the answer exists
  // in section array)],[], .....].
  static getArrayOfSectionsAccordingToQuestionName(
    answerList: ISurveyAnswers[],
    questionName: string
  ): ISection[] {
    const usersQuestionAnswerAndQuestionName: ISection[] = [];
    answerList.forEach((surveyAnswers) => {
      let section = surveyAnswers.content.find((section) => {
        return section.questionName === questionName;
      });
      if (section) usersQuestionAnswerAndQuestionName.push(section);
    });
    return usersQuestionAnswerAndQuestionName;
  }
}

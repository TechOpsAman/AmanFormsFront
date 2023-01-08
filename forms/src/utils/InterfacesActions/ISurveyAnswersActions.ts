import { ISection } from "../../interfaces/answers/iSection";
import { ISurveyAnswers } from "../../interfaces/answers/iSurvey";

export default class ISurveyAnswersActions {
  static getArrayOfSectionsAccordingToQuestionName(
    answerList: ISurveyAnswers[],
    questionName: string
  ): ISection[] {
    const sectionsAccordingToQuestionName: ISection[] = [];

    answerList.forEach((surveyAnswers) => {
      const section = surveyAnswers.content.find(
        (section) => section.questionName === questionName
      );

      if (section) sectionsAccordingToQuestionName.push(section);
    });
    return sectionsAccordingToQuestionName;
  }

  // Returns and hash map of =>
  // [key: section,
  // value: amount of times the section answer exists][][][]...
  static getMapOfData(answers: ISurveyAnswers) {}
}

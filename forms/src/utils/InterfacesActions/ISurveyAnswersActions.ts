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

  static getArrayOfSectionsAccordingToQuestionNameWithoutSimilarities(
    answerList: ISurveyAnswers[],
    questionName: string
  ) {
    const uniqueSections = new Set();
    const arrayOfSectionsAccordingToQuestionNameWithoutSimilarities =
      this.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      ).filter((section) => {
        const isUnique = !uniqueSections.has(section.answers.toString());
        if (isUnique) {
          uniqueSections.add(section.answers.toString());
        }
        return isUnique;
      });

    return arrayOfSectionsAccordingToQuestionNameWithoutSimilarities;
  }

  static getNumberOfCommentsAccordingToQuestion(
    answerList: ISurveyAnswers[],
    questionName: string
  ): number {
    return this.getArrayOfSectionsAccordingToQuestionName(
      answerList,
      questionName
    ).length;
  }
}

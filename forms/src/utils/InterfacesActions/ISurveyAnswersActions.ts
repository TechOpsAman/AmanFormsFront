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
    return this.getArrayOfSectionsAccordingToQuestionName(
      answerList,
      questionName
    ).filter((section) => {
      const isUnique = !uniqueSections.has(section.answers.toString());
      if (isUnique) {
        uniqueSections.add(section.answers.toString());
      }
      return isUnique;
    });
  }

  static getData(answerList: ISurveyAnswers[], questionName: string) {
    const data: Map<ISection, number> = new Map<ISection, number>();
    const possibleSections =
      this.getArrayOfSectionsAccordingToQuestionNameWithoutSimilarities(
        answerList,
        questionName
      );
    const arrayOfSectionsAccordingToQuestionName =
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      );
    possibleSections.forEach((section) => {
      data.set(section, 0);
    });

    arrayOfSectionsAccordingToQuestionName.forEach((section) => {
      data.set(section, data.get(section)! + 1);
    });
  }
}

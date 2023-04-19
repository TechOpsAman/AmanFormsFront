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

  static createMapOfSectionsArrayWithNoSimilarities(
    sections: ISection[]
  ): Map<ISection, number> {
    const map = new Map<ISection, number>();

    for (const section of sections) {
      let found = false;
      map.forEach((value, key) => {
        if (key.answers.toString() === section.answers.toString()) {
          map.set(key, value + 1);
          found = true;
        }
      });
      if (!found) {
        map.set(section, 1);
      }
    }

    return map;
  }

  static getData(answerList: ISurveyAnswers[], questionName: string) {
    const data = this.createMapOfSectionsArrayWithNoSimilarities(
      ISurveyAnswersActions.getArrayOfSectionsAccordingToQuestionName(
        answerList,
        questionName
      )
    );

    const arrayOfData = Array.from(data.entries());

    return arrayOfData;
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

  static getArrayOfQuestionNamesWithoutSimilarities(
    answerList: ISurveyAnswers[]
  ) {
    const questionNamesWithoutSimilarities: string[] = [];
    answerList.forEach((answer: ISurveyAnswers) => {
      answer.content.forEach((section: ISection) => {
        if (
          !questionNamesWithoutSimilarities.includes(section.questionName) &&
          section.questionType !== "TITLE"
        )
          questionNamesWithoutSimilarities.push(section.questionName);
      });
    });

    return questionNamesWithoutSimilarities;
  }
}

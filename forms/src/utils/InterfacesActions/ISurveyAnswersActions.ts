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
    console.log(sectionsAccordingToQuestionName);

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
    // console.log(
    //   "arrayOfSectionsAccordingToQuestionNameWithoutSimilarities " +
    //     arrayOfSectionsAccordingToQuestionNameWithoutSimilarities
    // );

    return arrayOfSectionsAccordingToQuestionNameWithoutSimilarities;
  }

  static getData(answerList: ISurveyAnswers[], questionName: string) {
    const data: Map<ISection, number> = new Map<ISection, number>();
    const possibleSections =
      this.getArrayOfSectionsAccordingToQuestionNameWithoutSimilarities(
        answerList,
        questionName
      );
    // console.log("000000000000000000000: " + possibleSections);

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

    const arrayOfData = Array.from(data.entries());
    // console.log("arrayOfData " + arrayOfData);
    // console.log("data " + data.values());

    return arrayOfData; /* [
      [
        {
          questionName: 'Question 1',
          questionType: QuestionType.MultipleChoice,
          required: true,
          answers: ['Answer 1', 'Answer 2', 'Answer 3']
        },
        1
      ],
      [
        {
          questionName: 'Question 2',
          questionType: QuestionType.MultipleChoice,
          required: true,
          answers: ['Answer 1', 'Answer 2']
        },
        2
      ],
      [
        {
          questionName: 'Question 3',
          questionType: QuestionType.MultipleChoice,
          required: false,
          answers: ['Answer 1']
        },
        3
      ]
    ] */
  }
}

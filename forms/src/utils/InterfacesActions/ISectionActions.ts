import { ISection } from "../../interfaces/answers/iSection";
import ArrayActions from "../DataStructuresActions/ArrayActions";
import MatrixActions from "../DataStructuresActions/MatrixActions";

export default class ISectionActions {
  static getOccurrenceOfAnswerInSectionArray(sections: ISection[]) {
    const occurrenceOfEveryAnswerArray: Array<(string[] | number)[]> = [];
    MatrixActions.getMatrixWithoutSimilarities(
      this.getAnswersArrayFromSectionArray(sections) //
    ).forEach((answer) => {
      occurrenceOfEveryAnswerArray.push([
        answer,
        Number(
          ArrayActions.getOccurrence(
            this.getAnswersArrayFromSectionArray(sections),
            answer
          )
        ),
      ]);
    });

    return occurrenceOfEveryAnswerArray;
  }

  static getAnswersArrayFromSectionArray(
    sections: ISection[]
  ): Array<string[]> {
    const answersArray: Array<string[]> = [];
    sections.forEach((section) => {
      answersArray.push(section.answers);
    });
    return answersArray;
  }
}

import { ISection } from "../interfaces/answers/iSection";
import ArrayActions from "./ArrayActions";

export default class ISectionActions {
  static getOccurrenceOfAnswerInSectionArray(sections: ISection[]) {
    const occurrenceOfEveryAnswerArray: Array<(string[] | number)[]> = [];
    ArrayActions.getArrayWithoutSimilarities(
      this.getAnswersArrayFromSectionArray(sections) //
    ).forEach((answer) => {
      console.log(answer);
      console.log(
        Number(
          ArrayActions.getOccurrence(
            this.getAnswersArrayFromSectionArray(sections),
            answer
          )
        )
      );
      console.log(this.getAnswersArrayFromSectionArray(sections));

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

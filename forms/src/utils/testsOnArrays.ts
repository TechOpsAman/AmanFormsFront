import { ISection } from "../interfaces/answers/iSection";

export default class TestsOnArrays {
  // returns an array of [[(1. answer), (2. how many times the answer exists
  // in section array)],[], .....].
  static getOccurrenceOfAnswerInSectionArray(sections: ISection[]) {
    const occurrenceOfEveryAnswerArray: Array<(string[] | number)[]> = [];
    TestsOnArrays.getAnswersArrayWithoutSimilarities(
      TestsOnArrays.getAnswersArrayFromSectionArray(sections)
    ).forEach((answer) => {
      occurrenceOfEveryAnswerArray.push([
        answer,
        Number(
          TestsOnArrays.getOccurrence(
            TestsOnArrays.getAnswersArrayFromSectionArray(sections),
            answer
          )
        ),
      ]);
    });
    return occurrenceOfEveryAnswerArray;
  }

  static getAnswersArrayFromSectionArray(sections: ISection[]) {
    const answersArray: Array<string[]> = [];
    sections.forEach((section) => {
      answersArray.push(section.answers);
    });
    return answersArray;
  }

  static getAnswersArrayWithoutSimilarities = (
    answersArray: Array<string[]>
  ) => {
    const answersSet = new Set(answersArray);
    const noSimilaritiesArray: Array<string[]> = [];
    answersSet.forEach((answer) => {
      noSimilaritiesArray.push(answer); // 👉️ one, two, three, four
    });
    return noSimilaritiesArray;
  };

  static getOccurrence<T>(array: T[], value: T) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }
}

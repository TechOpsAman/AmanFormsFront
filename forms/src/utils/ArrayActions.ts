export default class ArrayActions {
  // static getAnswersArrayWithoutSimilarities = ( // specific on answers - changed to generic.
  //   answersArray: Array<string[]>
  // ): Array<string[]> => {
  //   const answersSet = new Set(answersArray);
  //   const noSimilaritiesArray: Array<string[]> = [];
  //   answersSet.forEach((answer) => {
  //     noSimilaritiesArray.push(answer); // 👉️ one, two, three, four
  //   });
  //   return noSimilaritiesArray;
  // };

  static getArrayWithoutSimilarities<T>(answersArray: Array<T[]>) {
    const arraySet = new Set(answersArray);
    const noSimilaritiesArray: Array<T[]> = [];
    arraySet.forEach((val) => {
      noSimilaritiesArray.push(val); // 👉️ one, two, three, four
    });
    return noSimilaritiesArray;
  }

  static getOccurrence<T>(array: T[], value: T): number {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }
}

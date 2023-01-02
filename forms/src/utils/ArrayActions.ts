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

  // [
  //   ["df", "dfdf", "dfdfd"],
  //   ["dfddg", "Dgfgs"],
  //   ["df", "dfdf", "dfdfd"]
  // ]

  static getArrayWithoutSimilarities<T>(answersArray: Array<T[]>) {
    const noSimilaritiesArray: Array<T[]> = [];

    for (const answer of answersArray) {
      if (
        !noSimilaritiesArray.some(
          (x) =>
            x.length === answer.length && x.every((v, i) => v === answer[i])
        )
      )
        noSimilaritiesArray.push(answer);
    }

    return noSimilaritiesArray;
  }

  static getOccurrence<T>(array: T[], value: T): number {
    var count = 0;
    array.forEach((val) => {
      if (val === value) count++;
    });
    return count;
  }
}

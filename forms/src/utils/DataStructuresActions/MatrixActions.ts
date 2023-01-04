export default class MatrixActions {
  static getMatrixWithoutSimilarities<T>(answersArray: Array<T[]>) {
    const noSimilaritiesMatrix: Array<T[]> = [];

    for (const answer of answersArray) {
      if (
        !noSimilaritiesMatrix.some(
          (array) =>
            array.length === answer.length &&
            array.every((value, i) => value === answer[i])
        )
      )
        noSimilaritiesMatrix.push(answer);
    }

    return noSimilaritiesMatrix;
  }
}

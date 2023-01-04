export default class ArrayActions {
  static getOccurrence<T>(array: T[], value: T): number {
    var count = 0;
    array.forEach((val) => {
      if (val === value) count++;
    });
    return count;
  }
}

export default class ValuesGenerator {
  static generateTiksAmount(data: number[]) {
    if (Math.max(...data) < 3) return 2;

    switch (Math.max(...data)) {
      case 3:
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
    }
  }
}

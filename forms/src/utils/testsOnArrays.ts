export default function containsDuplicates(array: unknown[]) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

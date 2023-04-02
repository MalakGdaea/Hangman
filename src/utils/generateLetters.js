import { AasciiNumber } from "../Constants";
export function generateLetterStatuses() {
  let asciiNumber = AasciiNumber;
  const characters = {};
  while (asciiNumber <= 90) {
    characters[String.fromCharCode(asciiNumber)] = false;
    asciiNumber++;
  }
  return characters;
}

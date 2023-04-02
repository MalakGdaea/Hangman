import { winningMessage, losingMessage } from "../Constants";
export default function EndGame({ isWon, word }) {
  console.log(winningMessage);
  let message = "";
  if (isWon) {
    message = winningMessage;
  }
  if (isWon == false) {
    message = losingMessage + `, the word is ${word}`;
  }
  return <h3>{message}</h3>;
}

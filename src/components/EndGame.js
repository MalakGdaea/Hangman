export default function EndGame(props) {
  let message = "";
  if (props.won) {
    message = "Congratulations";
  }
  if (props.lost) {
    message = `Good luck next time, the word is ${props.word}`;
  }
  return <h3>{message}</h3>;
}

function Score(props) {
  let className;
  if (props.score >= 80) {
    className = "high-score";
  } else if (props.score >= 50) {
    className = "medium-score";
  } else {
    className = "low-score";
  }
  return <div className={className}>{props.score}</div>;
}

export default Score;

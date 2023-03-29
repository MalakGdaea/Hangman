import React from "react";
import Letter from "./Letter";

const Solution = (props) => {
  let word = props.solution.word;
  let wordLetters = [];

  for (let i = 0; i < word.length; i++) {
    wordLetters.push(<Letter l={props.characters[word[i]] ? word[i] : "__"} />);
  }
  return (
    <div>
      {wordLetters}
      <br></br>
      <div>
        <em>{props.solution.hint}</em>
      </div>
    </div>
  );
};

export default Solution;

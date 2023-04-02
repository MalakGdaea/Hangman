import React from "react";

function Letter(props) {
  if (props.class != "") {
    return <span className={props.class}>{props.letter} </span>;
  } else {
    return <span onClick={() => props.selectLetter(props.letter)}>{props.letter} </span>;
  }
}
// check if the letter already clicked it will stil update the score 

export default Letter;

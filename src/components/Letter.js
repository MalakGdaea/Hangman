import React from "react";

function Letter(props) {
  if (props.class != "") {
    return <span className={props.class}>{props.l} </span>;
  } else {
    return <span onClick={() => props.selectLetter(props.l)}>{props.l} </span>;
  }
}
// check if the letter already clicked it will stil update the score

export default Letter;

import React from "react";
import Letter from "./Letter";

const Letters = (props) => {
  return (
    <div>
      <div>Available Letters</div>
      {Object.keys(props.characters).map((e) => (
        <Letter
          letter={e}
          class={props.characters[e] ? "crossed-out" : ""}
          selectLetter={props.selectLetter}
          key={e}
        />
      ))}
    </div>
  );
};

export default Letters;

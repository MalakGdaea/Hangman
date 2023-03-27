import React from "react";

const Solution = () => {
  let wordLetters = ['_ ' , '_ ' , '_ ', '_ '];
  return (
    <div>
      {wordLetters.map((l) => (
        <span>{l}</span>
      ))}
      <div>
        <em>Your ideal mood when coding.</em>
      </div>
    </div>
  );
};

export default Solution
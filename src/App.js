import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import { useState } from "react";
import EndGame from "./components/EndGame";

function generateLetterStatuses() {
  let asciiNumber = 65;
  const characters = {};
  while (asciiNumber <= 90) {
    characters[String.fromCharCode(asciiNumber)] = false;
    asciiNumber++;
  }
  return characters;
}

function App() {
  const [characters, setCharacters] = useState(generateLetterStatuses());

  const [solution, setSolution] = useState({
    word: "CALM",
    hint: "Your ideal mood when coding.",
  });

  let [won, setWon] = useState(false);
  let [lost, setLost] = useState(false);

  const [score, setScore] = useState(100);
  const scorePerCharacter = Math.ceil(100 / solution.word.length);
  let [figuredOutLetters, setFiguredOutLetters] = useState(0);

  const updateScore = (letter) => {
    let currentDiscoveredLetters;
    let numOfLetterInword = solution.word.split(letter).length - 1;
    let currentScore = score;
    if (numOfLetterInword == 0) {
      currentScore -= scorePerCharacter;
    } else {
      currentDiscoveredLetters = figuredOutLetters + 1;
      setFiguredOutLetters(currentDiscoveredLetters);
      currentScore += numOfLetterInword * scorePerCharacter;
    }
    setScore(currentScore);
    checkEndGame(currentDiscoveredLetters, currentScore);
  };

  const checkEndGame = function (DiscoveredLetters, currentScore) {
    if (currentScore <= 0) {
      setLost(true);
    }
    if (DiscoveredLetters == solution.word.length) {
      setWon(true);
    }
  };
  const selectLetter = (letter) => {
    let copy = { ...characters };
    copy[letter] = true;
    setCharacters(copy);
    updateScore(letter);
  };

  return (
    <div>
      <Score score={score} />
      <Solution
        characters={characters}
        solution={solution}
        updateScore={updateScore}
      />
      <Letters characters={characters} selectLetter={selectLetter} />
      <EndGame won={won} lost={lost} word={solution.word} />
    </div>
  );
}

export default App;

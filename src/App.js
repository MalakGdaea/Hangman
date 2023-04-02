import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import { useState } from "react";
import EndGame from "./components/EndGame";
import { HintAndWord } from "./Constants";
import { generateLetterStatuses } from "./utils/generateLetters";

function App() {
  const [characters, setCharacters] = useState(generateLetterStatuses());
  const solution = HintAndWord;
  const [isWon, setIsWon] = useState(null); // null for the game does'nt ends
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
    checkEndGame(currentDiscoveredLetters, currentScore);
    setScore(currentScore);
  };

  const checkEndGame = function (DiscoveredLetters, currentScore) {
    if (currentScore <= 0) {
      setIsWon(false);
      return true;
    }
    if (DiscoveredLetters == solution.word.length) {
      setIsWon(true);
      return true;
    }
  };

  const selectLetter = (letter) => {
    let copy = { ...characters };
    copy[letter] = true;
    setCharacters(copy);
    updateScore(letter);
  };

  return (
    <div className="app">
      <Score score={score} />
      <Solution
        characters={characters}
        solution={solution}
        updateScore={updateScore}
      />
      <Letters characters={characters} selectLetter={selectLetter} />
      <EndGame isWon={isWon} word={solution.word} />
    </div>
  );
}

export default App;

// Css
import GlobalStyle from "./global.js";

// React
import { useState, useCallback, useEffect } from "react";

// Components
import StartScreen from "../src/components/StartScreen/index.jsx";
import Game from "../src/components/Game/index.jsx";
import GameOver from "./components/GameOver/index.jsx";

// data
import { wordList } from "./data/words.js";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick rando category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a rando word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category }; // é necessario retornar como objeto para nao retornar undefined
  };

  // starts the secret word games
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    // create array of letters
    let wordLetters = word.split(""); // separa todas as letras
    wordLetters = wordLetters.map((l) => l.toLowerCase()); // aqui torna todas as letras minusculas

    console.log(word, category);
    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };
  // console.log(words)

  // process the letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();
    console.log(normalizedLetter);
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
    }
    console.log(guessedLetters)
    console.log(wrongLetters)
  };

  // restart the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <GlobalStyle />
      {gameStage === "start" && (
        <StartScreen startGame={startGame} value="Start Game" />
      )}
      {gameStage === "game" && (
        <Game
          startGame={verifyLetter}
          verifyLetter={verifyLetter}
          value="End Game"
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && (
				<GameOver startGame={retry} value="Reset Game" />
			)}
    </>
  );
}

export default App;

import { useState, useRef } from "react";
import * as S from "./styles";
import Button from "../Button/Button";

const Game = ({
  verifyLetter,
  startGame,
  value,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const LetterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    console.log(" handle submit " + letter);
    setLetter("");

    LetterInputRef.current.focus(); // retorna o input para uma nova digitação
  };
  return (
    <S.Game>
      <p className="points">
        <S.PointsSpan>Pontuação: {score}</S.PointsSpan>
      </p>
      <S.H1>Adivinhe a palavra</S.H1>
      <h3 className="tip">
        Dica sobre a palavra <S.TipSpan>{pickedCategory}</S.TipSpan>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <S.WordContainer>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span className="blankSquare" key={i}></span>
          )
        )}
      </S.WordContainer>
      <S.LetterContainer>
        <p>Tente Adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={LetterInputRef}
          />
          <Button value="Jogar!" />
        </form>
      </S.LetterContainer>
      <S.WrongContainer>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </S.WrongContainer>
      {/* <Button startGame={startGame} value={value} /> */}
    </S.Game>
  );
};

export default Game;

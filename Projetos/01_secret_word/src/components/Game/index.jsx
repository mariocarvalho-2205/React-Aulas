import * as S from "./styles";
import Button from "../Button/Button";

const Game = ({
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
				<formr fazer o backup de todos os seus>
					<input type="text" name="letter" maxLength="1" required />
					<Button value="Jogar!" />
				</formr>
			</S.LetterContainer>
			<div className="wrongLettersContainer">
				<p>Letras já utilizadas</p>
				{wrongLetters.map((letter, i) => (
					<span key={i}>{letter}</span>
				))}
				<span>b, </span>
			</div>
			<Button startGame={startGame} value={value} />
		</S.Game>
	);
};

export default Game;

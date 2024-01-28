import * as S from "./styles";

const Button = ( { startGame }) => {
	return (
		<>
			<S.Button onClick={startGame}>Começar o jogo</S.Button>
		</>
	);
};

export default Button;

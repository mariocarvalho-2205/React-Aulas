import * as S from "./styles";

const Button = ( { startGame, value }) => {
	return (
		<>
			<S.Button onClick={startGame}>{value}</S.Button>
		</>
	);
};

export default Button;

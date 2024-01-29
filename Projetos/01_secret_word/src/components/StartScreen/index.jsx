import * as S from './styles';
import Button from '../Button/Button'

const StartScreen = ({ startGame, value }) => {
    return (
        <S.Container>
            <S.Title>Secret Word</S.Title>
            <S.TextP>Clique no botão abaixo para começãr a jogar</S.TextP>
            <Button startGame={startGame} value={value}/>
        </S.Container>

    )
}

export default StartScreen
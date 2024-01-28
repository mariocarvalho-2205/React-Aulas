import * as S from './styles';
import Button from '../Button/Button'

const StartScreen = ({ startGame }) => {
    return (
        <S.Container>
            <S.Title>Secret Word</S.Title>
            <S.TextP>Clique no botão abaixo para começãr a jogar</S.TextP>
            <Button startGame={startGame}/>
        </S.Container>

    )
}

export default StartScreen
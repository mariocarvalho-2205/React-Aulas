import * as S from './styles'
import Button from '../Button/Button'

const Game = ({ startGame, value }) => {
    return (
        <S.Game>
        
            <p className="points">
                <S.PointsSpan>Pontuação: 000</S.PointsSpan>
            </p>
            <S.H1>Adivinhe a palavra</S.H1>
            <h3 className='tip'>Dica sobre a palavra <S.TipSpan>Dica...</S.TipSpan>
            </h3>
            <p>Você ainda tem XXX tentativas</p>
            <S.WordContainer>
                <span className='letter'>A</span>
                <span className='blankSquare'></span>
            </S.WordContainer>
            <S.LetterContainer>
                <p>Tente Adivinhar uma letra da palavra:</p>
                <formr fazer o backup de todos os seus >
                    <input type="text" name="letter" maxLength="1" required/>
                    <Button value="Jogar!" />
                </formr>
            </S.LetterContainer>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas</p>
                <span>a, </span>
                <span>b, </span>
            </div>
            <Button startGame={startGame} value={value}/>

        </S.Game>
    )
}

export default Game
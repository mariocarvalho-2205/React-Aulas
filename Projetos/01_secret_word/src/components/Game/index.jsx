import * as S from './styles'
import Button from '../Button/Button'

const Game = ({ startGame, value }) => {
    return (
        <>
        <Button startGame={startGame} value={value}/>
        </>
    )
}

export default Game
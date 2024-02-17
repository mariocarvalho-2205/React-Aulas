import React from 'react'
import Button from '../Button/Button'
import * as S from './styles'


const GameOver = ({ startGame, value }) => {
  return (
    <S.Container>
      <S.Tilte>GameOver</S.Tilte> 
      <Button startGame={startGame} value={value}/>
    </S.Container>
  )
}

export default GameOver
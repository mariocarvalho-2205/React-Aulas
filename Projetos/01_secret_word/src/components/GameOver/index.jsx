import React from 'react'
import Button from '../Button/Button'
import * as S from './styles'


const GameOver = ({ startGame, value, score }) => {
  return (
    <S.Container>
      <S.Tilte>GameOver</S.Tilte> 
      <S.SubTitle>A sua pontuação foi <span>{score}</span></S.SubTitle>
      <Button startGame={startGame} value={value}/>
    </S.Container>
  )
}

export default GameOver
import React from 'react'
import Button from '../Button/Button'
import * as S from 'styled-components'


const GameOver = ({ startGame, value }) => {
  return (
    <div>
      GameOver
      <Button startGame={startGame} value={value}/>
    </div>
  )
}

export default GameOver
// Css
import GlobalStyle from "./global.js";

// React
import { useState, useCallback, useEffect } from 'react'

// Components
import StartScreen from "../src/components/StartScreen/index.jsx";
import Game from '../src/components/Game/index.jsx'
import GameOver from "./components/GameOver/index.jsx";

// data
import { wordList } from './data/words.js'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {

  const [ gameStage, setGameStage ] = useState(stages[0].name)
  const [ words ] = useState(wordList)

  console.log(words)

	return (
		<>
			<GlobalStyle />
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
			
      
		</>
	);
}

export default App;

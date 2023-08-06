import { useState } from 'react'
import './styles/App.css'

// JS Logic
import { TURNS } from './logic/constants'
import { checkWinner } from './logic/checkWinner'
// Components
import Reset from './components/Reset'
import Player from './components/Player'
import Board from './components/Board'

export default function App() {
  // Game States
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const [reset, setReset] = useState(false)
  // Reset Game
  const ResetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setReset(false)
  }
  // Update Board
  const updateBoard = (indexSquare)=>{
    const newBoard = [...board]

    if (newBoard[indexSquare] || winner) return

    newBoard[indexSquare] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    // In case there is a winner
    if (newWinner) {
      const congratsNewWinner = `The winner is ${newWinner}`
      setWinner(congratsNewWinner)
      setReset(true)
    }
    // In case the game concluded without a winner
    else if(!newBoard.includes(null)) {
      const tieGame = `Tie!`
      setWinner(tieGame)
      setReset(true)
    }
  }

  return (
    <>
    <main className='container'>
      <h1 className='container__title'>Tic-Tac-Toe</h1>
      <section className='container__board'>
        <Board board={board} updateBoard={updateBoard}/>
      </section>
      <section className='container__winner'>{winner}</section>
      <section className='container__turn'>
        <>
          <Player key={TURNS.X} isSelected={turn === TURNS.X} canReset={reset}>{TURNS.X}</Player>
          <Player key={TURNS.O} isSelected={turn === TURNS.O} canReset={reset}>{TURNS.O}</Player>
          <Reset key={'reset'} canReset={reset} resetGame={ResetGame}>Reset Game</Reset>
        </>
      </section>
    </main>
    </>
  )
}
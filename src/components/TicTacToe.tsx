'use client'

import { useState } from 'react'

type Player = 'X' | 'O' | null
type Board = Player[]

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const calculateWinner = (squares: Board): Player => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || gameOver) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)

    const winner = calculateWinner(newBoard)
    if (winner) {
      setGameOver(true)
    } else if (newBoard.every(square => square !== null)) {
      setGameOver(true)
    } else {
      setIsXNext(!isXNext)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setGameOver(false)
  }

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every(square => square !== null)

  const getStatus = () => {
    if (winner) {
      return `WINNER: ${winner}!`
    } else if (isDraw) {
      return "IT'S A DRAW!"
    } else {
      return `NEXT: ${isXNext ? 'X' : 'O'}`
    }
  }

  const getStatusColor = () => {
    if (winner) {
      return winner === 'X' ? 'bg-neo-red' : 'bg-neo-blue'
    } else if (isDraw) {
      return 'bg-neo-purple'
    } else {
      return isXNext ? 'bg-neo-red' : 'bg-neo-blue'
    }
  }

  const renderSquare = (index: number) => {
    const value = board[index]
    const isWinningSquare = winner && calculateWinningSquares(board)?.includes(index)
    
    return (
      <button
        key={index}
        className={`
          w-24 h-24 border-5 border-neo-black text-5xl font-black 
          bg-neo-white hover:bg-neo-yellow transition-all duration-200 
          flex items-center justify-center shadow-neo
          ${isWinningSquare ? 'bg-neo-green' : ''}
          ${value === 'X' ? 'text-neo-red' : 'text-neo-blue'}
          ${gameOver || board[index] !== null ? 'cursor-not-allowed' : 'cursor-pointer hover:transform hover:-translate-y-1 hover:shadow-neo-lg'}
        `}
        onClick={() => handleClick(index)}
        disabled={gameOver || board[index] !== null}
      >
        {value && (
          <span className="font-neo-mono transform hover:scale-110 transition-transform">
            {value}
          </span>
        )}
      </button>
    )
  }

  const calculateWinningSquares = (squares: Board): number[] | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c]
      }
    }
    return null
  }

  return (
    <div className="flex flex-col items-center font-neo">
      <h1 className="text-5xl font-black mb-8 text-neo-black tracking-tight transform -rotate-1">
        TIC TAC TOE
      </h1>
      
      <div className={`
        mb-8 px-6 py-3 border-5 border-neo-black shadow-neo-lg transform rotate-1
        ${getStatusColor()}
      `}>
        <div className="text-2xl font-black text-neo-white text-center">
          {getStatus()}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-8 p-4 border-5 border-neo-black bg-neo-black shadow-neo-xl">
        {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={resetGame}
          className="px-8 py-4 bg-neo-yellow border-5 border-neo-black shadow-neo-lg 
                   font-black text-xl text-neo-black transform hover:-translate-y-1 
                   hover:shadow-neo-xl transition-all duration-200 hover:bg-neo-cyan"
        >
          RESET GAME
        </button>
        
        <div className="px-8 py-4 bg-neo-green border-5 border-neo-black shadow-neo-lg">
          <div className="text-neo-black font-black text-center">
            <div className="text-sm">MOVES</div>
            <div className="text-2xl">{board.filter(square => square !== null).length}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicTacToe
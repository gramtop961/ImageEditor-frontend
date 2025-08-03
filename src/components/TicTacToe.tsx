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
      return `Winner: ${winner}`
    } else if (isDraw) {
      return "It's a draw!"
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`
    }
  }

  const renderSquare = (index: number) => {
    return (
      <button
        key={index}
        className="w-20 h-20 border-2 border-gray-400 text-4xl font-bold bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
        onClick={() => handleClick(index)}
        disabled={gameOver || board[index] !== null}
      >
        {board[index]}
      </button>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic Tac Toe</h1>
      
      <div className="mb-6 text-xl font-semibold text-gray-700">
        {getStatus()}
      </div>

      <div className="grid grid-cols-3 gap-1 mb-8 border-4 border-gray-600 p-2 bg-gray-600">
        {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
      </div>

      <button
        onClick={resetGame}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Reset Game
      </button>
    </div>
  )
}

export default TicTacToe
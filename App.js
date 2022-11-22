import React from 'react'
import Boards from './src/views/Main'
import data from './src/resources/data.json'
import Board from './src/views/SingleBoard'

export default function App () {
  return (
    <Boards></Boards>
    // <Board board={data.boards[0]}></Board>
  )
};

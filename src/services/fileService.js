export const addBoard = async (board, boardSmall) => {
  const lastId = boardSmall[boardSmall.length - 1].id
  board.id = lastId + 1
  return board
}

export const addList = async (list, listSmall) => {
  const lastId = listSmall[listSmall.length - 1].id
  list.id = lastId + 1
  return list
}

export const addBoard = async (board, boardSmall) => {
    let lastId = boardSmall[boardSmall.length - 1].id
    board.id = lastId + 1
    return board
}
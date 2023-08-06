import { WINNER_CASE } from "./constants"

export const checkWinner = boardToCheck =>{
    for (const winnerCase of WINNER_CASE){
        const [a, b, c] = winnerCase
        if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) return boardToCheck[a]
    }
    return null
}
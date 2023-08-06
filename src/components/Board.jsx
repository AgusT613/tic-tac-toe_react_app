import Square from "./Square"

const Board = ( {board, updateBoard} ) =>{
    return (
        <>{
        board.map((_, index)=>{
            return (
                <Square
                key={index}
                indexSquare={index}
                updateBoard={updateBoard}
                >
                {board[index]}
                </Square>
            )
            })
        }</>
    )
}

export default Board
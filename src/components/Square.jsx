const Square = ( {children, indexSquare, updateBoard} )=>{
    const handleClick = ()=>{ updateBoard(indexSquare) }
    return (
        <div 
        className='container__board__square'
        onClick={handleClick}
        >
        {children}
        </div>
    )
}

export default Square
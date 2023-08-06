const Reset = ( {children, canReset, resetGame} )=>{
  const handleClick = ()=> {resetGame()}
  if (canReset) return (
    <button onClick={handleClick} className={'container__turn__reset'}> 
      {children}
    </button>
  )
}

export default Reset
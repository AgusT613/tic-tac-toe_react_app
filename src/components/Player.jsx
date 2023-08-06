const Player = ( {children, isSelected, canReset} )=>{
    if (canReset) return
    const className = `container__turn__player`
    const backgroundColor = `${className}--is-selected`
    return (
        <button className={`${className} ${isSelected ? backgroundColor : '' }`}>
        {children}
        </button>
    )
}

export default Player
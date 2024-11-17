const boxColor = ({ color, colors }) => {
  
  const boxStyle = (borderColor) => {
    return borderColor === color ? borderColor : ''
  }

  const chageText = (borderColor) => {
    const text = borderColor === color ? `Si, soy el color ${color}` : `No soy el color ${color}`

    return (
      <span style={{ color: borderColor === color ? 'black' : borderColor, fontWeight: 'bold', fontSize: '25px' }}  >{text}</span>
    )
  }

  return (
    <>
      {colors.map((borderColor, index) => (
        <div key={index}  className={`box ${borderColor}`} style={{ borderColor: borderColor, backgroundColor: boxStyle(borderColor)}}>
          {chageText(borderColor)}
        </div>
      ))}
    </> 
  )    
}

export default boxColor;  

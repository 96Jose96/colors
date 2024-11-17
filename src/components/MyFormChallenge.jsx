import BoxColor from "./BoxColor";
import { useState, useRef } from 'react'

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const inputRef = useRef()
  const [color, setColor] = useState('')

  const hadleInput = () => {
    setColor(inputRef.current.value)
  }

  return (
    <>
      <p className="colorsArr">{colors.join(' - ')}</p>
      <input
        id="input"
        type="text"
        placeholder="Escribe un color"
        ref={inputRef}
        onChange={hadleInput}
      />
      <div className="container">
        <BoxColor color={color} colors={colors} />
      </div>
    </>
  );
}

export default MyForm;
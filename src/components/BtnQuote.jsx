import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({ setQuote, phrases, setNumberBg}) => {
  const handleRandomPharse = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }
  
  return (
    <div>
      <button onClick={handleRandomPharse}>Break cookie</button>
    </div>
  )
}

export default BtnQuote


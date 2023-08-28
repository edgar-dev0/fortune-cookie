import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {
  const indexImages = [1, 2, 3, 4]
  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray(indexImages)
  const [quote, setQuote] = useState(getRandomElemArray(phrases))
  const [numberBg, setNumberBg] = useState(numberRandom)
  //jsx no reconoce las propiedades que utilizan notacion - en su lugar se deben declarar coon la notacion camelCase
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }
  
  console.log(quote)
  return (
    <div className='container' style={bgStyle}>
      <div className='container_tittle'>
        <h1>fortune cookie</h1>
      </div>
        <Quote phrase={quote} />
        <BtnQuote 
          setQuote={setQuote}
          phrases={phrases}
          setNumberBg={setNumberBg}
        />
    </div>
  )
}

export default App
import React from 'react'

const Quote = ({phrase}) => {
  return (
    <div  className="container_phrase">
      <p>{phrase.phrase}</p>
    </div>
  )
}

export default Quote

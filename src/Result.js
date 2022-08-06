import React from 'react'

const Result = ({word,meaning,phonetics}) => {
  return (
 
    <ul className="translation panel">
     <li className="word">
        <h2>{word}</h2>
        <span>{phonetics}</span>
     </li>
     <li className="contain">
        <h3>noun</h3>
        <div className="details meaning">
            <h3>Meaning</h3>
            {meaning.map((mean)=>
            <ul className="meaning">
              <li>{mean.definition}</li>
              </ul>
            )}
        </div>
        <div className="details synonyms">
            <h3>Synonyms</h3>
          <span>greeting</span>
        </div>
     </li>
     </ul>
   
  )
}

export default Result

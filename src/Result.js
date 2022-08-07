import React from 'react'

const Result = ({word,meaning,phonetics,setText,synonyms}) => {
  return (
 
    <ul className="translation panel">
     <li className="word">
        <h2>{setText}</h2>
        {
            phonetics.map((phonetic,index)=>(
                <span ke={index}>{phonetic.text}</span>
            ))
        }
        
     </li>
     <li className="contain">
        <h3>noun</h3>
        <div className="details meaning">
            <h3>Meaning</h3>
            {meaning.map((mean,index)=>(
                <p key={index}>{mean.definition}</p>
            ))}
        </div>
        <div className="details synonyms">
            <h3>Synonyms</h3>
            {synonyms.map((syn,index)=>(
                <p key={index}>{syn}</p>

            ))}
          
        </div>
     </li>
     </ul>
   
  )
}

export default Result

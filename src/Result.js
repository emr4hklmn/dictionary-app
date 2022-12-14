import React from 'react'

const Result = ({word,meaning,phonetics,setText,synonyms}) => {
  return (
 
    <ul className="translation panel">
     <li className="word">
        <h2>{word}</h2>
        {
            phonetics.map((phonetic,index)=>(
                <span ke={index}>{phonetic.text}</span>
            ))
        }
        
     </li>
     <li className="contain">
        <h3>noun</h3>
        {
            meaning.length !== 0 && <div className="details meaning">
            <h3>Meaning</h3>
            {meaning.map((mean,index)=>(
                <p key={index}>- {mean.definition}</p>
            ))}
        </div>
            }
            {
                synonyms.length!==0 &&  <div className="details synonyms">
            <h3>Synonyms</h3>
            {synonyms.map((syn,index)=>(
                <span key={index} onClick={()=>setText(syn)}>  {`${syn}, `}</span>

            ))}
          
        </div>
            }
       
       
     </li>
     </ul>
   
  )
}

export default Result

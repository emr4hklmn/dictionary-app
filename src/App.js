import Result  from "./Result"
import React ,{useState, useMemo, useEffect} from 'react'
const voice=window.speechSynthesis;
function App() {
  // console.log(voice.getVoices())
const voices=useMemo(()=>voice.getVoices(),[])
const [voiceSelected,setVoiceSelected]=useState("Google US English")
const [text , setText]=useState("");
const [isSpeaking , setIsSpeaking]=useState("");
const [meaning ,setMeaning]=useState([]);
const [phonetics ,setPhonetics]=useState([]);
const [word ,setWord]=useState("");
const [error , setError]=useState("");
const[synonyms , setSynonyms]=useState([]);
const dictionaryApi=(text)=>{
  let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
  fetch(url).then(res=>res.json()).then(result=>{
    console.log(result);
    setMeaning(result[0].meanings[0].definitions);
    setSynonyms(result[0].meanings[0].synonyms)
    setPhonetics(result[0].phonetics);
    setWord(result[0].word);
    setError("");
  })
  .catch(err=>setError(err));
}

useEffect(()=>{
  if(!text.trim()) return;
  const debounce=setTimeout(()=>{
    dictionaryApi(text)
  },1000)
  return ()=> clearTimeout(debounce)
 
},[text])

const startSpeech=(text)=>{
  const utterance= new SpeechSynthesisUtterance(text)
  const speaker=voices.find(speaker=>speaker.name===voiceSelected);
utterance.voice=speaker;
  voice.speak(utterance);
}
const handleSpeech=()=>{
  if(!text.trim()) return;
  if(!voice.speaking){
    startSpeech(text);
    setIsSpeaking("speak")
    const textLength=text.length;
    console.log(textLength);
  }else{
    voice.cancel()
  }
  setInterval(()=>{
    if(!voice.speaking){
      setIsSpeaking("");
    }

  },100)
  
}
  return (
    <div className="App">
<div className="container">
  <h1 className="title">English Dictionary</h1>
  <form action="">
  <div className="row">
  <textarea name="" id="" cols="30" rows="4"  placeholder="Enter the text..."
  value={text} onChange={e=>setText(e.target.value)}
  ></textarea>
 <div className="voices-icons">
<div className="select-voices">
  <select name="" id="" value={voiceSelected} onChange={(e)=>setVoiceSelected(e.target.value)}>
  {voices.map((vow,index)=>
    <option key={vow.name} value={vow.name}>{vow.name}</option>)}
  </select>
</div>
<i className={`fa-solid fa-volume-high ${isSpeaking}`}
onClick={handleSpeech}
></i>
 </div>
 </div>
  </form>
<Result 
word={word} 
phonetics={phonetics} 
meaning={meaning}
setText={text}
synonyms={synonyms}
 />
</div>
    </div>
  );
}

export default App;

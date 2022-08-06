import Result  from "./Result"
import React ,{useState, useMemo, useEffect} from 'react'



const voice=window.speechSynthesis;
function App() {
  // console.log(voice.getVoices())
const voices=useMemo(()=>voice.getVoices(),[])
const [voiceSelected,setVoiceSelected]=useState("Google US English")

console.log(voiceSelected);


  return (
    <div className="App">
<div className="container">
  <h1 className="title">English Dictionary</h1>
  <form action="">
  <div className="row">
  <textarea name="" id="" cols="30" rows="4"  placeholder="Enter the text..."></textarea>
 <div className="voices-icons">
<div className="select-voices">
  <select name="" id="" value={voiceSelected} onChange={(e)=>setVoiceSelected(e.target.value)}>
  {voices.map((vow,index)=>
    <option key={vow.name} value={vow.name}>{vow.name}</option>)}
  </select>
</div>
<i class="fa-solid fa-volume-high" ></i>
 </div>
 </div>
  </form>
<Result />
</div>
    </div>
  );
}

export default App;

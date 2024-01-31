import React,{useState} from 'react'
import questions from './question.json'
import Display from './display'
import './App.css'
const App = () => {
  let temper=[];
  const[marks,setMarks]=useState([]);
  const event=(value,index)=>{
    temper[index]=value;
    setMarks([...temper]);

  }
  return (
    <div>
      <center>
        <h1>Quizz</h1>
        {questions.map((que,index)=>{
          return(
            <Display que={que} index={index} event={event}/>

          )
        })}
        <button onClick={()=>alert(marks.reduce((a,b)=>a+b,0))}>End Quizz</button>
      </center>
    </div>
  )
}

export default App

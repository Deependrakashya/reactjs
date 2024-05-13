import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setcounter] = useState(0)
  const add =()=>{
    
    setcounter(counter+1)
  } 
  const remove =()=>{
    if(counter!=0){

      setcounter(counter-1)
    }
  }
  return (
    
    <div id='container'>

    
    <h1>counter</h1>
    <h3> counter value :{counter} </h3>
    <button onClick={add}>Increase Value {counter}</button>
    <button onClick={remove}>remove Value {counter}
    </button>
    </div>
    
  )
}

export default App

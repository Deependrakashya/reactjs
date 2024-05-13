import { useState } from 'react'

import './App.css'

function App() {
   const [backColor, setbackColor] = useState('white')
   function changebg (color){
    setbackColor(color)
    console.log(backColor)
  }

  return (
    <>
    <div className="container"   style={{ backgroundColor:backColor, width:'100%', height:'100vh', alignItems:'center', textAlign:'center'} }  >
      <h1>color changer</h1>
    <div className="button" >
      <button className='btn' onClick={()=>changebg('red')}  style={{backgroundColor:'red'}  }>red</button>
      <button className='btn'onClick={()=>changebg('yellow')}  style={{backgroundColor:'yellow'}}>yellow</button>
      <button className='btn' onClick={()=>changebg('purple')} style={{backgroundColor:'purple'}}>purple</button>
      <button className='btn'onClick={()=>changebg('orange')} style={{backgroundColor:'orange'}}>orange</button>
      <button className='btn' onClick={()=>changebg('green')} style={{backgroundColor:'green'}}>green</button>
      <button className='btn' onClick={()=>changebg('blue')} style={{backgroundColor:'blue'}}>blue</button>

      <button className='btn' onClick={()=>changebg('pink')} style={{backgroundColor:'pink'}}>pink</button>
      <button className='btn'onClick={()=>changebg('lavender')} style={{backgroundColor:'lavender'}}>labendar</button>
      <button className='btn'onClick={()=>changebg('white')} style={{backgroundColor:'white'}}>white</button>
      <button className='btn'onClick={()=>changebg('black')} style={{backgroundColor:'black', color:'white'}}>black</button>
    </div>
    </div>
    </>
  )
}

export default App

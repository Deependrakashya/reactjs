import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username ="Deexi" course= "BCA" />
    <Card username= "Deependra" course="BCA" />
     </>
  )
}

export default App

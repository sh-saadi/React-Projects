import React, { useState } from 'react'

const App = () => {
  const [num,setNum] = useState(10)
  let func = ()  => {
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }
    return (
    <div>
      <h1>Number is {num}</h1>
    <button onClick={func}>Click me</button>
    </div>
  )
}

export default App

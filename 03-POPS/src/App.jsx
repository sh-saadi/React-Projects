import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Saad ur Rahman" age={22}/>
      <Card user="Ramzan" age={21}/>
   </div>
   
  )
}

export default App

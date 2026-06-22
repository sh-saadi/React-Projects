import React from 'react'

const App = () => {
  const help =(elem) => {
    console.log(elem);
  }
  return (
    <div onClick={(elem)=>{
      help(elem.type)
    }}>
     <button>Click me</button>
    </div> 
  )
}

export default App

import React from 'react'

const App = () => {
  let submit = (e) => {
   e.preventDefault();
   console.log("Form is Submitted");
   
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e);}
      }>
        <input placeholder='Enter your Text'></input> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

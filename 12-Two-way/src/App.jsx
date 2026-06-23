import React from 'react'
import { useState } from 'react'
const App = () => {
        const [value,setValue] =useState('') 
        let submit = (e) => {
        e.preventDefault();
        console.log("Form is Submitted",value);
        setValue('');
          }
  
  return (
    <div className='console'>
      <form onSubmit={(e)=>{
        submit(e);      
      }
      }>
        <input
        type="text"
        value={value}
         placeholder="Enter your name"
         onChange={(e)=>{
         setValue(e.target.value)
        }}>
          
          </input> 
        <button>Submit</button>
      </form>
      Check your console
    </div>
  )
}
export default App
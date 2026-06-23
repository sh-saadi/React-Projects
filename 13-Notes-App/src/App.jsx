import React from 'react'

const App = () => {
  const submithandler=(e)=>{
    e.preventDefault();
    console.log("Form is submitted");
  }
  return (
    <div className='h-screen bg-black lg:flex text-white   '>
      <form onSubmit={(e)=>{submithandler(e)}} className='flex lg:w-1/2 flex-col gap-4 p-10 '>
        <input placeholder='Enter Title' type='text' className='rounded w-full'></input>
        <textarea placeholder='Enter Title' type='text' className='rounded w-full h-32'></textarea>
        <button className='w-full bg-white text-black rounded'>Add Note</button>
        </form> 
        <div className='text-bold font-bold lg:w-1/2 bg-gray-900  p-6'>
        <h1>Your Notes</h1>
        <div className='flex gap-2 flex-wrap'>
          <div className='bg-white w-40 h-52 rounded-2xl '></div>
          <div className='bg-white w-40 h-52 rounded-2xl '></div>
          <div className='bg-white w-40 h-52 rounded-2xl '></div>
          </div>
        </div>
    </div>
  )
}

export default App

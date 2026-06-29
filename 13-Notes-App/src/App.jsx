import { useState } from "react";

  
   
const App = () => {
  let [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [task, setTask] = useState([])

  const submithandler=(e)=>{
    e.preventDefault();

    let copyTask=[...task]
    copyTask.push({title,detail})
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  return (
    <div className='h-screen bg-black lg:flex text-white   '>

      <form onSubmit={(e)=>{submithandler(e)}} className='flex lg:w-1/2 flex-col gap-4 p-10 '>
        <h1 className='text-bold text-xl font-bold'>Add Notes</h1>
        <input className='rounded w-full' 
        placeholder='Enter Title' 
        type='text' 
        value={title} 
        onChange={(e)=>{setTitle(e.target.value)}}></input>
        
        <textarea className='rounded w-full h-32' 
        placeholder='Enter Title' 
        type='text'
        value={detail}
        onChange={(e)=>{setDetail(e.target.value)}}></textarea>
        
        <button className='w-full bg-white text-black rounded'>Add Note</button>
       
        </form> 
        <div className='text-bold  text-xl font-bold lg:w-1/2 bg-gray-900  p-6'>
        <h1>Recent Notes</h1>
        <div className='flex gap-2 overflow-auto h-[90%] flex-wrap'>
          {task.map(function(elem,idx){
            return <div key={idx} className='bg-white w-40 overflow-y-auto  h-52 rounded-2xl p-3'>
              <h3 className="leading-tight text-xl font-bold break-after-all text-black ">{elem.title}</h3>
              <p className="leading-tight text-gray-600 text-xs  break-after-all font-semibold ">{elem.detail}</p>
            </div>
          })}
          </div>
        </div>
    </div>
  )
}

export default App

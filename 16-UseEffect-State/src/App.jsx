import  { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  useEffect(() => {
   console.log('Effect is running...');
   
  }, [num])
  return (
    <div>
      <button onClick={()=>{
       setNum(num+1)
      }}>Click Me</button>
    </div>
  )
}

export default App

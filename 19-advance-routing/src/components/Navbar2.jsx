import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className='bg-cyan-700 px-2 gap py-3'>

      <button onClick={()=>{
        navigate('/')
      }}
      className='bg-green-600 rounded px-2 py-2 active:scale-95 m-2 cursor-pointer  '
      >Return to Home Page</button>
    <button onClick={()=>{
        navigate(-1)
      }}
      className='bg-green-600 rounded px-2 py-2 active:scale-95 m-2 cursor-pointer  '
      >Back</button>
      <button onClick={()=>{
        navigate(+1)
      }}
      className='bg-green-600 rounded px-2 py-2 active:scale-95 m-2 cursor-pointer  '
      >Next</button>

    </div>
  )
}

export default Navbar2

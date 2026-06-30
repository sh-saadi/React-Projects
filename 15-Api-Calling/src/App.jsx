import axios from 'axios'

const App = () => {
  const getData= async ()=>{
    const responce = await axios('https://picsum.photos/id/0/info')
    console.log(responce);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async () => {
    let responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`)
    setUserData(responce.data)
  }
  useEffect(() => {
  getData()
  }, [index])

  let printUserData = <h2 className="text-gray-200">NO user available</h2>
  
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return<div key={elem.id}>
        <a href={elem.url} target="_blank">
        <div className="h-40 rounded-xl overflow-hidden w-44 ">
        <img className="h-full w-full object-cover" src={elem.download_url} alt=""/>
      </div>
       <h3 className="text-white font-bold text-lg">{elem.author}</h3>
       </a>
      </div>
    }
  )
  }

  return (
    <div className="bg-black overflow-auto py-8 px-10 text-white h-screen">
      
      <div className="flex flex-wrap gap-4 ">
        {printUserData}
      </div>
      <div className="mt-8 flex justify-center items-center gap-8">
        <button 
        className="bg-amber-300 active:scale-90 p-2 rounded w-15 text-black "
        onClick={()=>{
          if(index>1){
          setIndex(index-1)
          }
        }}
        >Prev</button>
        <h2>Page {index}</h2>
        <button 
        className="bg-amber-300 active:scale-90 p-2 rounded w-15 text-black "
         onClick={()=>{
          setIndex(index+1)
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App

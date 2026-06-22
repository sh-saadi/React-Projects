import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-3xl flex justify-between shrink-0 '>
     <img className='h-full w-full object-cover' src={props.img}/> 
                <Rightcardcontent tag={props.tag} id={props.id} color={props.color}/>
        
     </div>
    
  )
}

export default Rightcard

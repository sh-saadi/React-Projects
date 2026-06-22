import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8  justify-between flex flex-col'>
            <h2 className='h-11 w-11 bg-white rounded-full flex items-center justify-center text-xl font-bold '>{props.id+1}</h2>
        <div className=' text-white'>
            <p className='mb-6 text-lg object-cover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat repellat molestias earum mollitia vel quo</p>
            <div className='flex justify-between '>
            <button style={{background:props.color}} className=' px-6 py-2 rounded-full text-lg'>{props.tag}</button>
            <button style={{background:props.color}}  className=' px-3 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        </div>
  )
}

export default Rightcardcontent

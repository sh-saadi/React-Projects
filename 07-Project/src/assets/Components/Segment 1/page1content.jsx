import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent' 

const page1content = (props) => {
  return (
    <div className='flex justify-between gap-10<i class="ri-arrow-right-up-line"></i> items-center h-[90vh] py-3 px-18 '>
      <Leftcontent  />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default page1content

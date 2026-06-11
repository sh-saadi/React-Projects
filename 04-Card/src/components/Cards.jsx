import React from 'react'
import {Keyboard} from 'lucide-react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="card">
        <div>
 <div className="top">
        <img src={props.brandLogo}/>
        <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='skills'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
       
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
       </div>
        </div>
  )
}

export default Cards

/*2nd project's Cards
const Cards = () => {
  return (
    <div className='card'>
      <div className="top">
        <p className='para'>available</p>
        <p>$155/hr</p>
      </div>
      <div className="center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNxJ95C-riKep3TFQEKmiTZW4LdtioEP-qKIkFo100g&s=10" alt="" />
        <p className='name'>Wade Wilson</p>
        <p className='title'>Ui/Ux designer</p>
        <p className='epic'><Keyboard />Epic Coder</p>
        <div className='skills'>
            <p>Ui</p>
            <p>Ux</p>
            <p>photoshop</p>
            <button>+3</button>
        </div>
        <p className='bio'>Wade is not so expert yet he take almost 7 in in writting one line of code</p>
      </div>
      <div className="bottom">
        <button>View Profile</button>
      </div>

    </div>
    
  )
}

export default Cards*/

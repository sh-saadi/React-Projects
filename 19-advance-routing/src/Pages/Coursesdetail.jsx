import { useParams } from 'react-router-dom'

const Coursesdetail = () => {
    const params = useParams()
  return (
    <div>
      <h1>{params.id} Courses Detail page</h1>
    </div>
  )
}

export default Coursesdetail

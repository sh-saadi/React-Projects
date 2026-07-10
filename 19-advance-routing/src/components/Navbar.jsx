import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-cyan-800 px-6 py-4 text-white flex justify-between' >
        <h2 className='text-2xl font-bold'>Saad's Enterprise</h2>
        <div className='flex gap-10 '>
          <Link className='text-lg font-semibold' to='/'>Home</Link>
          <Link className='text-lg font-semibold' to='/about'>About</Link>
          <Link className='text-lg font-semibold' to='/contact'>Contact</Link>
          <Link className='text-lg font-semibold' to='/courses'>Courses</Link>
          <Link className='text-lg font-semibold' to='/product'>Product</Link>
        </div>
     
    </div>
  )
}

export default Navbar

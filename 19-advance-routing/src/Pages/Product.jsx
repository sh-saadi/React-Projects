import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (  
    <div>
      <div className="flex justify-center gap-4">
        <Link className='text-lg font-semibold' to='mens'>Men</Link>
        <Link className='text-lg font-semibold' to='womens'>Women</Link>
      </div>
      <div>
      <Outlet />
      </div>
    </div>
   
  )
}

export default Product

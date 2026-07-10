import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import NotFound from './Pages/NotFound'
import Courses from './Pages/Courses'
import Coursesdetail from './Pages/Coursesdetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
    <Navbar />
    <Navbar2 />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound />} />
      <Route path='/courses' element={<Courses />}/>
      <Route path='/courses/:id' element={<Coursesdetail/>} />
      <Route path='/product' element={<Product />}>
       <Route path='mens' element={<Men />}/> 
       <Route path='womens' element={<Women />}/>
      </Route>
    </Routes>
    <Footer />
    </div>
  )
}

export default App

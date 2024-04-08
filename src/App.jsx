import Home from './page/Home'
import Doctors from './page/Doctors'
import Hospitals from './page/Hospitals'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
const locomotiveScroll = new LocomotiveScroll()
import './App.css'
function App() {

  const location = useLocation()

  useEffect(() => {
    locomotiveScroll.scrollTo(0,0)
  }, [location.pathname])

  return (
    <>
      <Routes className=''>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/hospitals' element={<Hospitals/>}/>
          <Route path='*' element={<div>error</div>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

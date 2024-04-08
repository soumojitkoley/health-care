import Home from './page/Home'
import Doctors from './page/Doctors';
import Hospitals from './page/Hospitals';
import { Routes, Route, Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './App.css'
function App() {
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

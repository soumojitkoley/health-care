import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
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
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<div>error</div>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

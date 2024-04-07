import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='home-main-div'>
      <Navbar />
      <div className="home-header">
        {/* <h1 className=''>Welcome to <span className='blue'>Health</span><span className='green'>Care</span></h1> */}
        <h1>One Stop Solution For</h1>
        <h1>All Medical Needs</h1>
        {/* <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      </div>
      <div className="home-info">
        <div className="hi hi-1">
          <h2>Qualified Doctors</h2>
          <p className='hi-p'>Our highly skilled and experienced doctors dedicated to delivering exceptional medical care, expertise, and personalized attention to our clients.</p>
        </div>
        <div className="hi hi-2">
          <h2>Regular Checkup</h2>
          <p className='hi-p'>Regular checkups are crucial for maintaining optimal health and detecting potential health issues early. Our checkup services ensure thorough timely evaluations.</p>
        </div>
        <div className="hi hi-3">
          <h2>Quality Hospitals</h2>
          <p className='hi-p'>We collaborate with top-tier hospitals equipped with cutting-edge facilities and advanced medical technology to ensure superior patient care and treatment outcomes.</p>
        </div>
        <div className="hi hi-4">
          <h2>Lab Test</h2>
          <p className='hi-p'>Our state-of-the-art laboratory conducts comprehensive tests, providing precise and prompt results vital for diagnosing and managing various medical conditions.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
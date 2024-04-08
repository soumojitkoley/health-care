import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive';
import './Home.css'

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return (
    <>
      <Navbar />
      <div className='home-main-div'>
        <div className="home-header">
          {
            !isMobile ? (
              <>
                <h1>One Stop Solution For</h1>
                <h1>All Medical Needs</h1>
              </>
            )
              :
              (
                <>
                  <h1>One Stop Solution For All</h1>
                  <h1>Medical Needs</h1>
                </>
              )
          }
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
        <div className="about-part" id='abt'>
          <h1>About Us</h1>
          <p>At HealthCare, we are dedicated to providing comprehensive and reliable information about healthcare professionals and facilities. Our mission is to empower individuals to make informed decisions about their health by offering access to a network of trusted doctors and hospitals.<br /><br />
            With a commitment to excellence, we strive to connect patients with qualified doctors across various specialties and reputable hospitals in their area. Whether you're seeking medical advice, looking for a specialist, or need assistance in finding the right healthcare provider, HealthCare is here to guide you every step of the way.<br /><br />
            Our platform offers a user-friendly interface where patients can search for doctors and hospitals based on location, specialty, reviews, and more. We believe in transparency and accuracy, ensuring that the information provided is up-to-date and verified.<br /><br />
            Join us in our journey to promote health and wellness by making quality healthcare accessible to all. At HealthCare, your well-being is our priority.
          </p>
        </div>
        <div className='service-part' id='svc'>
          <div className="service-title">
            <h1>Our Services</h1>
          </div>
          <div className="services">
            <div className="service-doctor">
              <h2>Qualified Doctors</h2>
            </div>
            <div className="service-hospital">
            <h2>Qualified Doctors</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
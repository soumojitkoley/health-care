import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
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
            <h2><Fade direction='up' delay={500} triggerOnce={true}>Qualified Doctors</Fade></h2>
            <p className='hi-p'><Fade direction='up' delay={500} triggerOnce={true}>Our highly skilled and experienced doctors dedicated to delivering exceptional medical care, expertise, and personalized attention to our clients.</Fade></p>
          </div>
          <div className="hi hi-2">
            <h2><Fade direction='up' delay={500} triggerOnce={true}>Regular Checkup</Fade></h2>
            <p className='hi-p'><Fade direction='up' delay={500} triggerOnce={true}>Regular checkups are crucial for maintaining optimal health and detecting potential health issues early. Our checkup services ensure thorough timely evaluations.</Fade></p>
          </div>
          <div className="hi hi-3">
            <h2><Fade direction='up' delay={500} triggerOnce={true}>Quality Hospitals</Fade></h2>
            <p className='hi-p'><Fade direction='up' delay={500} triggerOnce={true}>We collaborate with top-tier hospitals equipped with cutting-edge facilities and advanced medical technology to ensure superior patient care and treatment outcomes.</Fade></p>
          </div>
          <div className="hi hi-4">
            <h2><Fade direction='up' delay={500} triggerOnce={true}>Lab Test</Fade></h2>
            <p className='hi-p'><Fade direction='up' delay={500} triggerOnce={true}>Our state-of-the-art laboratory conducts comprehensive tests, providing precise and prompt results vital for diagnosing and managing various medical conditions.</Fade></p>
          </div>
        </div>
        <div className="about-part" id='abt'>
          <h1><Fade direction='up' delay={500} triggerOnce={true}>About Us</Fade></h1>
          <p><Fade direction='up' delay={500} triggerOnce={true}>At HealthCare, we are dedicated to providing comprehensive and reliable information about healthcare professionals and facilities. Our mission is to empower individuals to make informed decisions about their health by offering access to a network of trusted doctors and hospitals.</Fade><br /><br />
          <Fade direction='up' delay={500} triggerOnce={true}>With a commitment to excellence, we strive to connect patients with qualified doctors across various specialties and reputable hospitals in their area. Whether you're seeking medical advice, looking for a specialist, or need assistance in finding the right healthcare provider, HealthCare is here to guide you every step of the way.</Fade><br /><br />
          <Fade direction='up' delay={500} triggerOnce={true}>Our platform offers a user-friendly interface where patients can search for doctors and hospitals based on location, specialty, reviews, and more. We believe in transparency and accuracy, ensuring that the information provided is up-to-date and verified.</Fade><br /><br />
          <Fade direction='up' delay={500} triggerOnce={true}>Join us in our journey to promote health and wellness by making quality healthcare accessible to all. At HealthCare, your well-being is our priority.</Fade>
          </p>
        </div>
        <div className='service-part' id='svc'>
          <div className="services">
            <div className="service-doctor">
              <h1><Fade direction='up' delay={500} triggerOnce={true}>Qualified Doctors</Fade></h1>
              <p><Fade direction='up' delay={500} triggerOnce={true}>Receive expert medical care from highly qualified and experienced doctors, dedicated to improving your health and well-being.</Fade></p>
              <Link to='/doctors' className='none'>
              <Fade direction='up' delay={500} triggerOnce={true}>
                <button>
                Check Doctors
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
                </Fade>
              </Link>
            </div>
            <div className="service-hospital">
              <h1><Fade direction='up' delay={500} triggerOnce={true}>Top-notch Hospitals</Fade></h1>
              <p><Fade direction='up' delay={500} triggerOnce={true}>Experience unparalleled medical services at our hospitals equipped with advanced technology and staffed by skilled healthcare professionals.</Fade></p>
              <Link to='/hospitals' className='none'>
              <Fade direction='up' delay={500} triggerOnce={true}>
                <button>
                  Check Hospitals
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
                </Fade>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
import React from 'react'
import './Footer.css'
import { FaLocationDot, FaHouse, FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='footer-div' id='ft'>
      <div className="footer-upper">
        <div className="part part1">
          <Fade direction='up'><p className='footer-heading'>About HealthCare</p></Fade>
          <Fade direction='up' delay={400} duration={1000}><p className='footer-desc about-big-p'>
            Healthcare Solutions, based in Kolkata, offers comprehensive medical services, including patient care, doctor consultations, hospital referrals, and health information dissemination. Our goal is to provide seamless access to healthcare resources and enhance patient outcomes. Trust us for personalized healthcare support tailored to your needs.
          </p></Fade>
        </div>
        <div className="part part2">
          <Fade direction='up'><p className='footer-heading'>Quick Links</p></Fade>
          <div className="quick-links">
            <Fade direction='up' delay={500}><p className='footer-desc'>Careers</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Crew</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Our Work</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Latest News</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Our Partners</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Contact Us</p></Fade>
          </div>
        </div>
        <div className="part part3">
          <Fade direction='up'><p className='footer-heading'>Contact Information</p></Fade>
          <div className="address">
            {!isMobile ? (
              <Fade direction='up' delay={500}>
                <FaHouse
                  onMouseEnter={() => handleMouseEnter('house')}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: hoveredIcon === 'house' ? '#fff' : '#777' }}
                  className={hoveredIcon === 'house' ? 'hovered' : ''}
                />
              </Fade>
            ) : (<></>)}
            <Fade direction='up' delay={500}><p className='footer-desc'>IT & VFX</p></Fade>
          </div>
          <div className="location">
            {!isMobile ? (
              <Fade direction='up' delay={500}>
                <FaLocationDot
                  onMouseEnter={() => handleMouseEnter('location')}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: hoveredIcon === 'location' ? '#fff' : '#777' }}
                  className={hoveredIcon === 'location' ? 'hovered' : ''}
                />
              </Fade>
            ) : (<></>)}
            <Fade direction='up' delay={500}><p className='footer-desc'>Barrackpore, North 24 Parganas, West Bengal,<br /> Kolkata - 700123</p></Fade>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <Fade direction='up' delay={500}><p className='footer-desc'>© 2024 HealthCare Ltd.</p></Fade>
      </div>
    </div>
  )
}

export default Footer
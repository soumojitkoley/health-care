import React from 'react'
import './Footer.css'
import { FaLocationDot, FaHouse, FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Footer = () => {
  const location = useLocation()
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [path, setPath] = useState(false)

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (location.pathname == '/doctors' || location.pathname == '/hospitals') {
      setPath(true)
    }
  }, [location.pathname])

  function scrollHandler(scrollTarget) {
    if (scrollTarget == '') {
      locomotiveScroll.scrollTo(0, 0)
    }
    else if (scrollTarget == '#abt' && isMobile == false) {
      locomotiveScroll.scrollTo(690)
    }
    else if (scrollTarget == '#svc' && isMobile == false) {
      locomotiveScroll.scrollTo(1200)
    }
    else if (scrollTarget == '#abt' && isMobile == true) {
      locomotiveScroll.scrollTo(1470)
    }
    else if (scrollTarget == '#svc' && isMobile == true) {
      locomotiveScroll.scrollTo(2500)
    }
    else {
      locomotiveScroll.scrollTo(scrollTarget)
    }
  }

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
            <Fade direction='up' delay={500}>
              <NavLink onClick={() => scrollHandler('')} to="/" className='footer-desc'>
                Home
              </NavLink>
            </Fade>
            {
              !path ? (
                <Fade direction='up' delay={500}>
                  <a onClick={() => { scrollHandler('#abt') }} className='footer-desc'>
                    About
                  </a>
                </Fade>
              )
                :
                (<></>)
            }
            {
              !path ? (
                <Fade direction='up' delay={500}>
                  <a onClick={() => { scrollHandler('#svc') }} className='footer-desc'>
                    Services
                  </a>
                </Fade>
              )
                :
                (<></>)
            }
            <Fade direction='up' delay={500}>
              <NavLink to="/doctors" className='footer-desc'>
                Doctors
              </NavLink>
            </Fade>
            <Fade direction='up' delay={500}>
              <NavLink to="/hospitals" className='footer-desc'>
                Hospitals
              </NavLink>
            </Fade>
            <Fade direction='up' delay={500}>
              <a onClick={() => { scrollHandler('#ft') }} className='footer-desc'>
                Contact
              </a>
            </Fade>
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
            <Fade direction='up' delay={500}><p className='footer-desc'>HealthCare</p></Fade>
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
            <Fade direction='up' delay={500}><p className='footer-desc'>Kolkata, North 24 Parganas, West Bengal,<br /> Kolkata - 700123</p></Fade>
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
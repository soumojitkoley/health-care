import React from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Navbar = () => {
  const location = useLocation()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [path, setPath] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  };

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
      locomotiveScroll.scrollTo(770)
    }
    else if (scrollTarget == '#svc' && isMobile == false) {
      locomotiveScroll.scrollTo(1320)
    }
    else if (scrollTarget == '#abt' && isMobile == true) {
      locomotiveScroll.scrollTo(1570)
    }
    else if (scrollTarget == '#svc' && isMobile == true) {
      locomotiveScroll.scrollTo(2670)
    }
    else {
      locomotiveScroll.scrollTo(scrollTarget)
    }
  }

  return (
    <div className="navbar">
      <h1 onClick={() => { scrollHandler('') }} className='navbar-h1'><span className='blue'>Health</span><span className='green'>Care</span></h1>
      {isMobile ? (
        <div className='hello'>
          <label class="burger" for="burger">
            <input type="checkbox" checked={isMenuOpen} readOnly onClick={handleMenuToggle} id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div key={isMenuOpen ? 'menu-open' : 'menu-closed'} className={'fullnav-mob'} data-visible="true"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nav-menu">
                  <ul type="none" className="list">
                    <li>
                      <NavLink onClick={() => { scrollHandler(''), handleMenuToggle() }} to="/" className="link">
                        Home
                      </NavLink>
                    </li>
                    {
                      !path ? (
                        <li>
                          <a onClick={() => { scrollHandler('#abt'), handleMenuToggle() }} className="link">
                            About
                          </a>
                        </li>
                      )
                        :
                        (<></>)
                    }
                    {
                      !path ? (
                        <li>
                          <a onClick={() => { scrollHandler('#svc'), handleMenuToggle() }} className="link">
                            Services
                          </a>
                        </li>
                      )
                        :
                        (<></>)
                    }
                    <li>
                      <NavLink onClick={handleMenuToggle} to="/doctors" className="link">
                        Doctors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={handleMenuToggle} to="/hospitals" className="link">
                        Hospitals
                      </NavLink>
                    </li>
                    <li>
                      <a onClick={() => { scrollHandler('#ft'), handleMenuToggle() }} className="link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="nav-menu">
          <ul type="none" className="list">
            <li>
              <NavLink onClick={() => scrollHandler('')} to="/" className="link">
                Home
              </NavLink>
            </li>
            {
              !path ? (
                <li>
                  <a onClick={() => scrollHandler('#abt')} className="link">
                    About
                  </a>
                </li>
              )
                :
                (<></>)
            }
            {
              !path ? (
                <li>
                  <a onClick={() => scrollHandler('#svc')} className="link">
                    Services
                  </a>
                </li>
              )
                :
                (<></>)
            }
            <li>
              <NavLink to="/doctors" className="link">
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/hospitals" className="link">
                Hospitals
              </NavLink>
            </li>
            <li>
              <a onClick={() => scrollHandler('#ft')} className="link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
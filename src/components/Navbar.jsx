import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Navbar = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  function scrollHandler(scrollTarget) {
    if(scrollTarget == '') {
      locomotiveScroll.scrollTo(0, 0)
    }
    else{
      locomotiveScroll.scrollTo(scrollTarget)
    }
  }

  return (
    <div className="navbar">
      <h1 className='navbar-h1'><span className='blue'>Health</span><span className='green'>Care</span></h1>
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
                animate={{ opacity: 1, width: '70vw' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="nav-menu">
                  <ul type="none" className="list">
                    <li>
                      <NavLink onClick={handleMenuToggle} to="/" className="link">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={handleMenuToggle} to="/about" className="link">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={handleMenuToggle} to="/contact" className="link">
                        Contact
                      </NavLink>
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
            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="link">
                Services
              </NavLink>
            </li>
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
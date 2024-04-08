import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data/doctorDetails.js'
import Footer from '../components/Footer.jsx'
import { FcApproval, FcRating, FcHome, FcBriefcase } from "react-icons/fc";
import { useMediaQuery } from 'react-responsive';
import './Doctors.css'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Doctors = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [doc, setDoc] = useState(data)
  function changeType(type) {
    if(isMobile) {
      locomotiveScroll.scrollTo(0, 0)
    }
    else{
      locomotiveScroll.scrollTo(310)
    }
    if (type === 'all') {
      setDoc(data)
    } else {
      let newDocData = data.filter((d) => d.specialization === type)
      setDoc(newDocData)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='doctor-div'>
        <div className='filter-part'>
          <div className="each-filter" onClick={() => changeType('all')}>
            <img src="/filterImage/0.png" alt="" />
            <p>All</p>
          </div>
          <div className="each-filter" onClick={() => changeType('General Physician')}>
            <img src="/filterImage/1.png" alt="" />
            <p>General Physician</p>
          </div>
          <div className="each-filter" onClick={() => changeType('General Surgeon')}>
            <img src="/filterImage/2.png" alt="" />
            <p>General Surgeon</p>
          </div>
          <div className="each-filter" onClick={() => changeType('General Medicine')}>
            <img src="/filterImage/3.png" alt="" />
            <p>General Medicine</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Internal Medicine Specialist')}>
            <img src="/filterImage/4.png" alt="" />
            <p>Medicine Specialist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Pediatrician')}>
            <img src="/filterImage/5.png" alt="" />
            <p>Pediatrician</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Child Specialist')}>
            <img src="/filterImage/6.png" alt="" />
            <p>Child Specialist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Neurologist')}>
            <img src="/filterImage/7.png" alt="" />
            <p>Neurologist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Gastroenterologist')}>
            <img src="/filterImage/8.png" alt="" />
            <p>Gastroenterologist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('ENT Specialist')}>
            <img src="/filterImage/9.png" alt="" />
            <p>ENT Specialist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Urologist')}>
            <img src="/filterImage/10.png" alt="" />
            <p>Urologist</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Gynaecologist')}>
            <img src="/filterImage/11.png" alt="" />
            <p>Gynaecologist</p>
          </div>
        </div>
        <div className='each-doctor-part' id='edp'>
          {
            doc.map(d => (
              <div key={d.sn} className='each-doctor'>
                <div className='ed-name-spc'>
                  <h2 className='icon'>
                    {d.name}
                    <FcApproval size={20} />
                  </h2>
                  <h3 className='icon'><img src="/images/badge.png" alt="" />{d.specialization}</h3>
                </div>
                <div>
                  <h5>{d.type}</h5>
                  <p className='icon'><img src="/images/briefcase.png" alt="" />Total Experience : <span><b>{d.experience} Years</b></span></p>
                </div>
                <p><img src="/images/location.png" alt="" />Address : <span><b>{d.address}</b></span></p>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Doctors
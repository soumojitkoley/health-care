import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data/doctorDetails.js'
import Footer from '../components/Footer.jsx'
import { FcApproval } from "react-icons/fc"
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll'
const locomotiveScroll = new LocomotiveScroll()
import './Doctors.css'

const Doctors = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [doc, setDoc] = useState(data)

  const filterType = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'General Physician',
      value: 'General Physician',
    },
    {
      name: 'General Surgeon',
      value: 'General Surgeon',
    },
    {
      name: 'General Medicine',
      value: 'General Medicine',
    },
    {
      name: 'Medicine Specialist',
      value: 'Internal Medicine Specialist',
    },
    {
      name: 'Pediatrician',
      value: 'Pediatrician',
    },
    {
      name: 'Child Specialist',
      value: 'Child Specialist',
    },
    {
      name: 'Neurologist',
      value: 'Neurologist',
    },
    {
      name: 'Gastroenterologist',
      value: 'Gastroenterologist',
    },
    {
      name: 'ENT Specialist',
      value: 'ENT Specialist',
    },
    {
      name: 'Urologist',
      value: 'Urologist',
    },
    {
      name: 'Gynaecologist',
      value: 'Gynaecologist',
    },
  ]
  
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
          {
            filterType.map((ef, idx) => (
              <div key={idx} className="each-filter" onClick={() => changeType(`${ef.value}`)}>
                <img src={`/filterImage/${idx}.png`} alt="" />
                <p>{ef.name}</p>
              </div>
            ))
          }
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
                  <h5 className='icon'><img src="/images/education.png" alt="" />{d.type}</h5>
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
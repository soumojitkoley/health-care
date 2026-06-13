import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data/bloodDetails.js'
import Footer from '../components/Footer.jsx'
import { FcApproval } from "react-icons/fc";
import { useMediaQuery } from 'react-responsive';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './BloodBank.css'

const BloodBank = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [doc, setDoc] = useState(data)
  
  function changeType(type) {
    if(isMobile) {
      locomotiveScroll.scrollTo(0, 0)
    }
    else{
      locomotiveScroll.scrollTo(340)
    }
    if (type === 'all') {
      setDoc(data)
    } else {
      let newDocData = data.filter((d) => d.city === type)
      setDoc(newDocData)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='center-div'>
        <div className='filter-part'>
          <div className="each-filter" onClick={() => changeType('all')}>
            <p>All</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Kolkata')}>
            <p>Kolkata</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Howrah')}>
            <p>Howrah</p>
          </div>
          <div className="each-filter" onClick={() => changeType('South 24 Pgs')}>
            <p>South 24 Pgs</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Diamond Harbour HD')}>
            <p>Diamond Harbour</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Purba Medinipur')}>
            <p>Purba Medinipur</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Nandigram HD')}>
            <p>Nandigram</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Paschim Medinipur')}>
            <p>Paschim Medinipur</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Kalimpong')}>
            <p>Kalimpong</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Darjeeling')}>
            <p>Darjeeling</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Alipurduar')}>
            <p>Alipurduar</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Coochbehar')}>
            <p>Coochbehar</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Jalpaiguri')}>
            <p>Jalpaiguri</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Uttar Dinajpur')}>
            <p>Uttar Dinajpur</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Dakshin Dinajpur')}>
            <p>Dakshin Dinajpur</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Malda')}>
            <p>Malda</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Murshidabad')}>
            <p>Murshidabad</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Rampurhat HD')}>
            <p>Rampurhat</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Birbhum')}>
            <p>Birbhum</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Paschim Bardhaman')}>
            <p>Paschim Bardhaman</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Purba Bardhaman')}>
            <p>Purba Bardhaman</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Nadia')}>
            <p>Nadia</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Basirhat HD')}>
            <p>Basirhat</p>
          </div>
          <div className="each-filter" onClick={() => changeType('North 24 Pgs')}>
            <p>North 24 Pgs</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Purulia')}>
            <p>Purulia</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Bishnupur HD')}>
            <p>Bishnupur</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Bankura')}>
            <p>Bankura</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Jhargram')}>
            <p>Jhargram</p>
          </div>
          <div className="each-filter" onClick={() => changeType('Hooghly')}>
            <p>Hooghly</p>
          </div>
        </div>
        <div className='each-center-part' id='edp'>
              {doc.map((h, idx) => (
                <div key={idx} className='each-center'>
                  <h2>{h.name}<FcApproval size={20} /></h2>
                  <h4 className='icon'><img src="/images/skyscraper.png" alt="" />City : {h.city}</h4>
                  <h4 className='icon'><img src="/images/phone-call.png" alt="" />Phone : <a className='none' href={`tel:+${h.phone}`}>{h.phone}</a></h4>
                  <p className='icon'><img src="/images/placeholder.png" alt="" />Pincode : <b>{h.pincode}</b></p>
                  <p><img src="/images/google-maps.png" alt="" />Address : <b>{h.address}</b></p>
                </div>
              ))}
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default BloodBank
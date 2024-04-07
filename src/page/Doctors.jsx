import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data/doctorDetails.js'
import './Doctors.css'

const Doctors = () => {
  const [doc, setDoc] = useState(data)
  function changeType(type) {
    if (type === 'all') {
      setDoc(data);
    } else {
      let newDocData = data.filter((d) => d.specialization === type);
      setDoc(newDocData);
    }
  }
  
  return (
    <div>
      <Navbar/>
      <div className='doctor-div'>
        <div className='filter-part'>
          <p className='each-filter' onClick={() => changeType('all')}>All</p>
          <p className='each-filter' onClick={() => changeType('General Physician')}>General Physician</p>
          <p className='each-filter' onClick={() => changeType('General Surgeon')}>General Surgeon</p>
          <p className='each-filter' onClick={() => changeType('General Medicine')}>General Medicine</p>
          <p className='each-filter' onClick={() => changeType('Internal Medicine Specialist')}>Medicine Specialist</p>
          <p className='each-filter' onClick={() => changeType('Pediatrician')}>Pediatrician</p>
          <p className='each-filter' onClick={() => changeType('Child Specialist')}>Child Specialist</p>
          <p className='each-filter' onClick={() => changeType('Neurologist')}>Neurologist</p>
          <p className='each-filter' onClick={() => changeType('Gastroenterologist')}>Gastroenterologist</p>
          <p className='each-filter' onClick={() => changeType('ENT Specialist')}>ENT Specialist</p>
          <p className='each-filter' onClick={() => changeType('Urologist')}>Urologist</p>
          <p className='each-filter' onClick={() => changeType('Gynaecologist')}>Gynaecologist</p>
        </div>
        <div className='each-doctor-part'>
        {
          doc.map(d => (
            <div key={d.sn} className='each-doctor'>
              <h2>{d.name}</h2>
              <p>{d.type}</p>
              <p>{d.specialization}</p>
              <p>{d.address}</p>
              <p>{d.experience}</p>
            </div>
          )) 
        }
        </div>
      </div>
    </div>
  )
}

export default Doctors
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FcApproval } from "react-icons/fc";
import data from '../data/hospitalDetails.js';
import './Hospitals.css';
import Footer from '../components/Footer.jsx';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Hospitals = () => {
  const [query, setQuery] = useState('');
  const [hos, setHos] = useState(data);
  const [selectedOption, setSelectedOption] = useState('All');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    locomotiveScroll.scrollTo(0, 0);
  };

  useEffect(() => {
    let filteredHos = data;
    if (query !== '') {
      const pincode = parseInt(query);
      const lowerBound = pincode - 5;
      const upperBound = pincode + 5;
      filteredHos = data.filter((d) => {
        const dPincode = parseInt(d.pincode);
        return dPincode >= lowerBound && dPincode <= upperBound;
      });
    }
    if (selectedOption !== 'All') {
      filteredHos = filteredHos.filter((h) => h.type === selectedOption);
    }
    setHos(filteredHos);
  }, [query, selectedOption]);

  function changeHandler(event) {
    locomotiveScroll.scrollTo(0, 0);
    setQuery(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="hospitals-div">
        <div className="search-part">
          <input onChange={changeHandler} type="text" placeholder="Enter your pincode to get nearby hospitals" name="" id="" />
          <select class="minimal" value={selectedOption} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Multispeciality">Multispeciality</option>
            <option value="Eye">Eye</option>
            <option value="Heart">Heart</option>
            <option value="Orthopaedics">Orthopaedics</option>
            <option value="Cancer">Cancer</option>
            <option value="Diabetes">Diabetes</option>
            <option value="ENT">Ent</option>
          </select>
        </div>
        <div className="result-part">
          {hos.length === 0 ? (
            <div className="no-result">
              <img src="/images/no-results.png" alt="" />
              <h2>No search results</h2>
            </div>
          ) : (
            <div className="hospital-data">
              {hos.map((h, idx) => (
                <div key={idx} className="each-hospital">
                  <h2>{h.name}<FcApproval size={20} /></h2>
                  <h3 className='icon'><img src="/images/star.png" alt="" />Type : {h.type}</h3>
                  <h4 className='icon'><img src="/images/skyscraper.png" alt="" />City : <b>{h.city}</b>, District : {h.district}</h4>
                  <p className='icon'><img src="/images/placeholder.png" alt="" />Pincode : <b>{h.pincode}</b></p>
                  <p><img src="/images/google-maps.png" alt="" />Address : <b>{h.address}</b></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospitals;

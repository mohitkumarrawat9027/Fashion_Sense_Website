import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionsweatpants';
import Footer from '../components/footer';

const Sweatpants = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section/>
        <Footer/>
      </div>
    );
  };
  
  export default Sweatpants;
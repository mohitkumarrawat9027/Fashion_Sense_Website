import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionknitwear';
import Footer from '../components/footer';

const Knitwear = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section/>
        <Footer/>
      </div>
    );
  };
  
  export default Knitwear;
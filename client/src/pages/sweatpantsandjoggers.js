import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Sweatpants = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"bottomwear"} subcategory={"sweatpants"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Sweatpants;
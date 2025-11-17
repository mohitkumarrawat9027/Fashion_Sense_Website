import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Jackets = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"topwear"} subcategory={"jackets"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Jackets;
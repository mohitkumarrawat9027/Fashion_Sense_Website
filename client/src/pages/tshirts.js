import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Tshirts = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"topwear"} subcategory={"tshirts"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Tshirts;
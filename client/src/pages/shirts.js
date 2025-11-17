import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Shirts = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"topwear"} subcategory={"shirts"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Shirts;
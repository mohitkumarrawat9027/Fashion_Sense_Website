import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Trousers = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"bottomwear"} subcategory={"trousers"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Trousers;
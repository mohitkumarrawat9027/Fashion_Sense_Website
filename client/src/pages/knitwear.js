import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Knitwear = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"topwear"} subcategory={"knitwear"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Knitwear;
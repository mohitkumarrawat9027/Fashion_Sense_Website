import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Shorts = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"bottomwear"} subcategory={"shorts"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Shorts;
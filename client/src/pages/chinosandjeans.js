import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionproduct';
import Footer from '../components/footer';

const Chinos = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section category={"bottomwear"} subcategory={"chinos"}/>
        <Footer/>
      </div>
    );
  };
  
  export default Chinos;
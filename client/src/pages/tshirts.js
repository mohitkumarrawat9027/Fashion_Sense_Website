import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectiontshirts';
import Footer from '../components/footer';

const Tshirts = () => {
    return (
      <div style={{background:"beige"}}>
        <Navbar />
        <Section/>
        <Footer/>
      </div>
    );
  };
  
  export default Tshirts;
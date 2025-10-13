import React from 'react';
import Navbar from '../components/navbar';
import Section from '../components/sectionsearchresults';
import Footer from '../components/footer';

const Searchresults = () => {
  return (
    <div style={{background:"beige"}}>
      <Navbar />
      <Section/>
      <div style={{height:"200px"}}></div>
      <Footer/>
    </div>
  );
};

export default Searchresults;
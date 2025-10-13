import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Section from '../components/sectionbottomwear';
import Section2 from '../components/sectiontopwear';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div style={{background:"beige"}}>
      <Navbar />
      <Carousel/>
      <Section2/>
      <div style={{height:"100px"}}></div>
      <Section/>
      <Footer/>
    </div>
  );
};

export default Home;
import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Section from '../components/section';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div style={{background:"beige"}}>
      <Navbar />
      <Carousel/>
      <Section/>
      <div style={{height:"200px"}}></div>
      <Section/>
      <Footer/>
    </div>
  );
};

export default Home;
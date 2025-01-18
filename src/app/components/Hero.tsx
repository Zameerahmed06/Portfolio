import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/mypic.jpg)] bg-left lg:bg-[100%] bg-cover"
      style={{
        backgroundSize: "30%",
        backgroundPosition: "left 20px top 160px",
      }}
    >
      <Navbar />
      <div className="container grid grid-cols-1 lg:grid-cols-2 h-[calc(70vh-40px)] sm:h-[calc(60vh-20px)] pt-8 sm:pt-12 lg:pt-16">
        {/* Empty Div for Spacing */}
        <div className="hidden lg:block"></div>
        
        {/* Text Content */}
        <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] italic leading-tight flex justify-center items-center py-8">
          <div className="text-center lg:text-left">
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Zameer</p>
            <p data-aos="zoom-in-up">Solangi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


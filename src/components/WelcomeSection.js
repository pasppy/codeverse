import React from 'react';
import Marquee from "react-fast-marquee";

const WelcomeSection = () => {
  const isMobile = window.innerWidth < 768;
  const marqueeSpeed = isMobile ? 150 : 300;

  return (
    <div
      id="page2"
      className="flex flex-col justify-center overflow-hidden gap-20 lg:gap-32 items-center  relative "
    >

      {/* Main heading with marquee effect */}

      <Marquee speed={marqueeSpeed} className="overflow-hidden font-Horizon">
        <div className="mt-10 mr-5 text-[5vmax]  flex gap-5 justify-center items-center leading-none">
          <h1 className=" tracking-wide lg:tracking-widest horizon">WELCOME TO</h1>
          <h1 className="special-gothic tracking-wide">CODEVERSE</h1>
        </div>
      </Marquee>

      <div
        id="message"
        className="p-8 pt-20 mb-20 relative flex justify-center items-center h-[50vh] w-[70vw] lg:w-[80vw] rounded-[40px] bg-[#26172e] z-5"
      >
        <div
          id="heading2"
          className="absolute top-0 right-0 transform -translate-y-1/2 flex justify-center items-center tracking-wider text-2xl lg:text-4xl font-bold py-4 bg-[#360f56] rounded-full w-[85%] lg:w-[70%]"
        >
          who are we?
        </div>

        <div id="info" className="lg:w-[50%] text-[4vmin] lg:text-[3vmin] text-center">
          To be precise CODEVERSE is an opensource community by the students, for the students. It primarily focuses on upliftment of coding culture in Aliah University. But in a larger picture it's kind of a mayhem to create something new, something incredible.
        </div>

        <div
          id="logo1"
          className="absolute bottom-[-10px] left-0 transform -translate-x-1/2 w-[5vmax] z-10"
        >
          <img src="/images/cvbnw logo.png" alt="Logo" />
        </div>

        <div
          id="logo2"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[70%] w-[40vmax] max-w-[500px] hidden lg:block"
        >
          <img src="/images/cvbnw logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

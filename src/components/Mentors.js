import React from 'react';
import Marquee from "react-fast-marquee";


const Mentors = () => {
  const isMobile = window.innerWidth < 768;
  const marqueeSpeed = isMobile ? 150 : 300;

  return (
    <div
      id="page5"
      className="flex flex-col justify-center items-center gap-10  relative "
    >
      <div
        id="heading4"
        className="mt-10 flex justify-center items-center tracking-wider text-3xl lg:text-4xl font-semibold py-4 px-[54px] sm:px-40 text-nowrap bg-[#360f56] rounded-full"
      >
        our partners
      </div>


      <Marquee speed={marqueeSpeed} className="overflow-hidden font-Horizon">

        <div id="slider-container" className="pl-6 lg:pl-12 w-full gap-6 lg:gap-12 flex">
          <div className="mentor1 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor2 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor3 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor4 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor5 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor6 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor7 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
          <div className="mentor8 bg-gray-400 w-[100px] lg:w-[200px] h-[50px] lg:h-[100px] rounded-full"></div>
        </div>

      </Marquee>



      <div id="join-the-revolution" className="mt-20 lg:mt-40 relative p-4 rounded">
        <h1 className="absolute translate-y-[-20%]  tuesday-vibes text-[10vw] lg:text-[8vw]">Join the</h1>
        <h1 className="special-gothic text-[12vw] lg:text-[10vw] text-transparent text-stroke-pink text-[#cb6ce6]">REVOLUTION</h1>
      </div>

    </div >
  );
};

export default Mentors;

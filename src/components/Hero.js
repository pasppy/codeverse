import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/codeverse logo.mp4"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />

      <nav className="px-5 pt-5 lg:px-10 lg:pt-10 flex justify-between">
        <img src="/images/cvbnw logo.png" className="hidden lg:block w-8"  alt="Logo" />

        <div id="brand" className="flex gap-4 items-center">
          <p className="text-6xl amarante">CODEVERSE</p>
        </div>

        <div id="menu">
          <img src="/images/icons8-menu-250.png" className="w-8" alt="Menu" />
        </div>
      </nav>

      <div
        id="lower"
        className="roboto absolute w-full bottom-5 px-5 lg:px-10 lg:bottom-10 flex justify-between items-center"
      >
        <div>
          <p>site status:</p>
          <p className="text-4xl text-[#cb6ce6] font-semibold">Online</p>
        </div>
        <div className="flex flex-col items-end">
          <p>version:</p>
          <p className="text-4xl text-[#cb6ce6] font-semibold">CV-0.1a</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

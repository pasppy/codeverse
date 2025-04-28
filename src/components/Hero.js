import React, { useState } from 'react';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'page2', label: 'About Us' },
    { id: 'page4', label: 'Coming Soon' },
    { id: 'page5', label: 'Partners' },
    { id: 'page6', label: 'Contact Us' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

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
        <img src="/images/cvbnw logo.png" className="hidden lg:block w-10 h-10" alt="Logo" />

        <div id="brand" className="flex gap-4 items-center">
          <p className="text-4xl lg:text-5xl tracking-widest amarante">CODEVERSE</p>
        </div>

        <div id="menu" className="relative cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
          <img src="/images/icons8-menu-250.png" className="w-8 h-8" alt="Menu" />
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#26172d] rounded-lg shadow-lg z-50">
              <ul className="flex flex-col p-2">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className="cursor-pointer px-4 py-2 hover:bg-[#360f56] text-white rounded"
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
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

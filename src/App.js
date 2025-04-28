import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Lenis from '@studio-freight/lenis';
import WelcomeSection from './components/WelcomeSection';
import WhatWeBring from './components/WhatWeBring';
import ComingSoon from './components/ComingSoon';
import Mentors from './components/Mentors';
import ContactUs from './components/ContactUs';
import Socials from './components/Socials';

function App() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 0.5,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const disableScroll = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const enableScroll = () => {
    if (lenis) {
      lenis.start();
    }
  };

  return (
    <div className="App">
      <Socials />
      <Hero lenis={lenis} />
      <WelcomeSection />
      <WhatWeBring />
      <ComingSoon disableScroll={disableScroll} enableScroll={enableScroll} />
      <Mentors />
      <ContactUs />
    </div>
  );
}

export default App;

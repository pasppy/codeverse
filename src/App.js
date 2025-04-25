import React from 'react';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import WhatWeBring from './components/WhatWeBring';
import ComingSoon from './components/ComingSoon';
import Mentors from './components/Mentors';

import ContactUs from './components/ContactUs';

import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <Socials />
      <Hero />
      <WelcomeSection />
      <WhatWeBring />
      <ComingSoon />
      <Mentors />
      <ContactUs />
    </div>
  );
}

export default App;

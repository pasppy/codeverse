import React from 'react';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import WhatWeBring from './components/WhatWeBring';
import ComingSoon from './components/ComingSoon';
import Mentors from './components/Mentors';

import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
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

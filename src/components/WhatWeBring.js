import React from 'react';

const WhatWeBring = () => {
  return (
    <div
      id="page3"
      className="flex flex-col justify-center items-center gap-20 lg:gap-40 bg-[url('/images/bg-gradient.jpg')] bg-cover lg:bg-right relative -z-10"
    >
      <div
        id="heading3"
        className="mt-10 flex justify-center items-center tracking-wider text-2xl lg:text-4xl font-semibold py-4 px-[54px] sm:px-40 text-nowrap bg-[#360f56] rounded-full"
      >
        what do we bring in?
      </div>

      <div className="mb-20 flex items-around justify-around flex-wrap w-[80%] lg:w-[70%] gap-10">
        <div id="first" className="flex flex-col justify-center items-center gap-2 lg:gap-5">
          <img src="/images/learning.png" alt="Learnings" className="w-[30vmin] max-w-[200px]" />
          <p className="text-[#cb6ce6] lg:text-xl">Learnings</p>
        </div>

        <div id="second" className="flex flex-col justify-center items-center gap-2 lg:gap-5">
          <img src="/images/discussion.png" alt="Mentorship" className="w-[30vmin] max-w-[200px]" />
          <p className="text-[#cb6ce6] lg:text-xl">Mentorship</p>
        </div>

        <div id="third" className="flex flex-col justify-center items-center gap-2 lg:gap-5">
          <img src="/images/consulting.png" alt="Opportunities" className="w-[30vmin] max-w-[200px]" />
          <p className="text-[#cb6ce6] lg:text-xl">Opportunities</p>
        </div>

        <div id="fourth" className="flex flex-col justify-center items-center gap-2 lg:gap-5">
          <img src="/images/networking (1).png" alt="Networking" className="w-[30vmin] max-w-[200px]" />
          <p className="text-[#cb6ce6] lg:text-xl">Networking</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBring;

import React from 'react';

const ComingSoon = () => {
  return (
    <div
      id="page4"
      className="flex flex-col justify-center items-center gap-20 bg-gradient-bg bg-cover lg:bg-right relative"
    >
      <div
        id="heading4"
        className="mt-10 flex justify-center items-center tracking-wider text-3xl lg:text-4xl font-semibold py-4 px-[54px] sm:px-40 text-nowrap bg-[#360f56] rounded-full"
      >
        coming soon
      </div>

      <div className="mb-20 flex items-around justify-around flex-wrap w-[80%] lg:w-[70%] gap-10">
        <div
          id="leaderboard"
          className="flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
        >
          <img
            src="/images/podium.png"
            alt="Leaderboard"
            className="w-[30vmin] max-w-[140px]"
          />
          <p className="text-[#e6d9e8] text-3xl font-bold">Leaderboard</p>
        </div>

        <div
          id="hackverse"
          className="flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
        >
          <img
            src="/images/hacker.png"
            alt="HackVerse"
            className="w-[30vmin] max-w-[140px]"
          />
          <p className="text-[#e6d9e8] text-3xl font-bold">HackVerse</p>
        </div>

        <div
          id="showcase"
          className="flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
        >
          <img
            src="/images/picture.png"
            alt="Showcase"
            className="w-[30vmin] max-w-[140px]"
          />
          <p className="text-[#e6d9e8] text-3xl font-bold">Showcase</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

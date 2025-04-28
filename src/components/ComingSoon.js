import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [popupOpenId, setPopupOpenId] = useState(null);

  // Disable scroll when popup is open
  useEffect(() => {
    if (popupOpenId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [popupOpenId]);

  const openPopup = (id) => {
    setPopupOpenId(id);
  };

  const closePopup = () => {
    setPopupOpenId(null);
  };

  return (
    <div
      id="page4"
      className="flex flex-col justify-center items-center gap-20  relative"
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
          onClick={() => openPopup('leaderboard')}
          className="cursor-pointer flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
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
          onClick={() => openPopup('hackverse')}
          className="cursor-pointer flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
        >
          <img
            src="/images/hacker.png"
            alt="HackVerse"
            className="w-[30vmin] max-w-[140px]"
          />
          <p className="text-[#e6d9e8] text-3xl font-bold">Hackverse</p>
        </div>

        <div
          id="showcase"
          onClick={() => openPopup('showcase')}
          className="cursor-pointer flex flex-col justify-center items-center gap-6 lg:gap-5 bg-[#26172d] w-[300px] h-[350px] rounded-[40px] hover:scale-110 transition-transform transition-colors hover:bg-[#360f56]"
        >
          <img
            src="/images/picture.png"
            alt="Showcase"
            className="w-[30vmin] max-w-[140px]"
          />
          <p className="text-[#e6d9e8] text-3xl font-bold">Showcase</p>
        </div>
      </div>

      {popupOpenId === 'leaderboard' && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-[#26172d] rounded-3xl p-8 w-[600px] max-w-[80vw] relative text-white">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative">LEADERBOARD <img src=''></img></h2>

            <p className="mb-2 leading-6 tracking-wider">
              Codeverse leaderboard programme is to feature highest codepoints collectors on codeverse website and social media handles. codepoints can be collected at codeverse events, codeverse sessions, codeverse tasks and more.
            </p>

          </div>
        </div>
      )}

      {popupOpenId === 'hackverse' && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-[#26172d] rounded-3xl p-8 w-[600px] max-w-[80vw] relative text-white">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">HACKVERSE</h2>
            <p className="mb-2 leading-6 tracking-wider">
              Hackverse is a homegrown, annual hackathon conducted by codeverse. Compete with students from different institutes, learn new things, win swags and prizes from codeverse.
            </p>

          </div>
        </div>
      )}

      {popupOpenId === 'showcase' && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-[#26172d] rounded-3xl p-8 w-[600px] max-w-[80vw] relative text-white">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">SHOWCASE</h2>
            <p className="mb-2 leading-6 tracking-wider">
              Codeverse showcase is a opportunity to showcase your great projects on codeverse website showcase section, official social media pages.
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default ComingSoon;

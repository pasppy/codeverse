import React from 'react';

const ContactUs = () => {
  return (
    <div
      id="page6"
      className="pt-10 pb-10 flex justify-center items-center flex-col lg:flex-row gap-14 lg:gap-20 bg-gradient-bg bg-cover lg:bg-right relative -z-10"
    >
      <div id="left" className="flex flex-col gap-20 justify-between items-center">
        <div
          id="heading4"
          className="flex justify-center items-center tracking-wider text-3xl lg:text-4xl font-semibold py-4 lg:py-3 px-[54px] sm:px-40 text-nowrap bg-[#360f56] rounded-full"
        >
          contact us
        </div>

        <div className="flex flex-col items-center">
          <div id="logos" className="flex gap-4">
            <img src="/images/cvbnw logo.png" className="w-10" alt="Logo" />
            <img src="/images/cvbnw logo.png" className="w-10" alt="Logo" />
          </div>
          <h1 className="mt-5 mb-3 text-[#8c52ff] special-gothic text-4xl tracking-wider">CODEVERSE</h1>
          <h1 className="text-3xl">Aliah University</h1>
          <p className="text-center">
            Plot No.- IIA/27, AA II, Newtown, Kolkata, Kadampukur, West Bengal 700160
          </p>
        </div>
      </div>

      <div id="right" className="flex items-center flex-col gap-6">
        <form action="" className="bg-[#360f56] rounded-[20px] p-8 flex flex-col gap-4 w-[80vw] lg:w-[30vw]">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent outline-none border-b border-white py-1"
          />
          <input
            type="number"
            placeholder="Your Number"
            className="bg-transparent outline-none border-b border-white py-1"
          />
          <textarea
            name=""
            id=""
            placeholder="Enter "
            className="bg-transparent outline-none border-b border-white"
          ></textarea>
          <button className="mt-6 bg-[#8c52ff] rounded-full">
            <img
              className="w-10 m-auto invert"
              src="https://img.icons8.com/?size=100&id=UwNwzKjuqt0T&format=png&color=000000"
              alt="Send"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

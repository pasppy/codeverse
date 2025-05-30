import React, { useState } from 'react';

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  return (
    <div
      id="page6"
      className="pt-8 pb-10 flex justify-center items-center flex-col lg:flex-row gap-8 lg:gap-20 relative"
    >
      <div id="left" className="flex flex-col gap-16 justify-between items-center">
        <div
          id="heading4"
          className="flex justify-center items-center tracking-wider text-3xl lg:text-4xl font-semibold py-4 lg:py-3 px-[54px] sm:px-40 text-nowrap bg-[#360f56] rounded-full"
        >
          contact us
        </div>

        <div className="flex flex-col items-center">
          <div id="logos" className="flex gap-4">
            <img src="/images/cvbnw logo.png" className="w-14" alt="Logo" />
            <img src="/images/output-onlinepngtools.png" className="w-14" alt="Logo" />
          </div>
          <h1 className="mt-5 mb-3 font-bold text-[#8c52ff] amarante  text-5xl lg:text-6xl tracking-wider">CODEVERSE</h1>
          <h1 className="text-3xl">Aliah University</h1>
          <p className="text-center text-sm">
            Plot No.- IIA/27, AA II, Newtown, Kolkata,<br /> Kadampukur, West Bengal 700160
          </p>
        </div>
      </div>

      <div id="right" className="flex items-center flex-col gap-6">
        <form
          action={`https://formsubmit.co/${process.env.REACT_APP_CONTACT_EMAIL}`}
          method="POST"
          onSubmit={() => setSent(true)}
          className="bg-[#360f56] rounded-[20px] p-8 flex flex-col gap-4 w-[80vw] lg:w-[30vw]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-transparent outline-none border-b border-white py-1"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-transparent outline-none border-b border-white py-1"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Your Number"
            className="bg-transparent outline-none border-b border-white py-1"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="bg-transparent outline-none border-b border-white"
            required
          ></textarea>
          <button type="submit" className="mt-6 bg-[#8c52ff] rounded-full">
            <img
              className="w-10 m-auto invert"
              src="https://img.icons8.com/?size=100&id=UwNwzKjuqt0T&format=png&color=000000"
              alt="Send"
            />
          </button>
          {sent && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </div >
  );
};

export default ContactUs;

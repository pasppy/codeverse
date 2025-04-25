import React from 'react';

const Socials = () => {
    return (
        <div id="socials" className="hidden bg-[#360f56] lg:flex flex-col gap-6 p-4 fixed z-[5] top-[50%] left-0">
            <a href="#" aria-label="Instagram">
                <img src="/images/instagram.png" className="w-6" alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter">
                <img src="/images/twitter.png" className="w-6" alt="Twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
                <img src="/images/linkedin.png" className="w-6" alt="LinkedIn" />
            </a>
        </div>
    );
};

export default Socials;

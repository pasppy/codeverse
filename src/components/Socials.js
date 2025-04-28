import React from 'react';

const Socials = () => {
    return (
        <div id="socials" className="hidden bg-[#360f56] translate-y-[-50%] lg:flex flex-col gap-6 p-4 fixed z-[5] top-[50%] left-0">
            <a href="https://www.instagram.com/codeverse.au/" target='_blank' aria-label="Instagram">
                <img src="/images/instagram.png" className="w-6" alt="Instagram" />
            </a>
            <a href="https://x.com/CodeverseOrg" target='_blank' aria-label="Twitter">
                <img src="/images/twitter.png" className="w-6" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/company/codeverseorg/" target='_blank' aria-label="LinkedIn">
                <img src="/images/linkedin.png" className="w-6" alt="LinkedIn" />
            </a>
            <a href="mailto:org.codeverse@gmail.com" target='_blank' aria-label="mail">
                <img src="https://img.icons8.com/?size=100&id=UwNwzKjuqt0T&format=png&color=000000" className="invert w-6" alt="LinkedIn" />
            </a>
        </div>
    );
};

export default Socials;

import React from 'react';
import Link from 'next/link';
const BannerBG = require('../assets/images/banner-bg.jpg');
const BannerLogo = require('../assets/images/banner-logo.png');

const BannerSection = () => {
  return (
    <div className="banner-section relative z-20 flex items-center justify-center min-h-screen overflow-hidden py-24">
      <div className="inner-banner z-20 w-full py-24">
        <div className="w-full max-w-siteContainer mx-auto px-8 xl:pt-[8rem] 2xl:pt-[15rem]">
          <img
            className="w-full max-w-[92rem] max-h-[20rem] m-auto"
            src={BannerLogo.default.src}
            alt="banner-logo"
          />
          <div className="btn text-center mt-5">
            <Link href="#">
              <a className="w-full inline-block max-w-[21.7rem] h-[5.6rem] leading-[5rem] border-2 border-solid border-white font-futura text-[2rem] text-[#D6D6D6] transition ease-in hover:bg-Primary2 hover:text-white">
                Connect Wallet
              </a>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="absolute w-full h-full object-cover object-top"
        src={BannerBG.default.src}
        alt="banner-bg"
      />
    </div>
  );
};

export default BannerSection;

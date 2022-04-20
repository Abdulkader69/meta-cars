import React from 'react';
const welcomeRight = require('../assets/images/welcome-right.png');

const WelcomeSection = () => {
  return (
    <div className="welcome-area mb-[5.5rem]">
      <div className="top">
        <div className="title mb-7">
          <h2 className="font-brandon text-white text-[2.5rem] lg:text-[4rem] leading-[1.6]">
            Welcome to the
            <br />
            <strong>McQueen and his Buddies NFT’s</strong>
          </h2>
        </div>
      </div>
      <div className="row flex flex-wrap">
        <div className="w-full md:w-[60%] bg-black bg-opacity-40 py-5 pl-8 pr-4 mb-11 md:mb-0">
          <p className="text-[1.8rem] lg:text-[2.4rem] text-white font-futuralite leading-[1.7] text-opacity-90 shadow-text md:-ml-8">
            MetaCars is a Token + NFT + Metaverse Game inspired by the cartoon
            Cars. When we were children we all watched the cartoon Cars, but now
            is the time to make our dream reality by creating a community of car
            enthusiasts. MetaCars is a proprietary, hyper deflationary token on
            the Binance Smart Chain network. MetaCars is not just a regular
            token, it's a token that collects all cartoon cars lovers in one
            community. Moreover, it offers them different kinds of NFTs to be
            used in Metaverse and the carton cars are converted into a Metaverse
            GAME.{' '}
          </p>
        </div>
        <div className="w-full md:w-[40%] md:pl-8">
          <img
            className="w-full m-auto"
            src={welcomeRight.default.src}
            alt="nft-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

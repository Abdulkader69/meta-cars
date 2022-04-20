import React from 'react';
import Link from 'next/link';
import NftImage from '../assets/images/nftimage.jpg';
import ClaimBG from '../assets/images/claim-bg.jpg';
import Etheriam from '../assets/images/etheriam.png';

const ClaimYourNFTs = () => {
  return (
    <div className="claim-your-nfts relative flex items-center justify-center">
      <img
        className="absolute object-cover object-center w-full m-auto opacity-[60%]"
        src={ClaimBG.src}
        alt="nft-image"
      />
      <div className="welcome-area mb-[15rem] z-20">
        <div className="w-full max-w-siteContainer mx-auto px-8">
          <div className="top">
            <div className="title mb-7">
              <h2 className="font-brandon text-white text-[2.5rem] lg:text-[4rem] leading-[1.6] font-extrabold">
                Claim your NFT’s
              </h2>
            </div>
          </div>
          <div className="row flex flex-wrap">
            <div className="w-full md:w-[60%] mb-14 md:mb-0">
              <div className="w-full bg-black bg-opacity-40 py-5 pl-8 pr-4 md:-ml-8">
                <p className="text-[1.8rem] lg:text-[2.4rem] text-white font-futuralite leading-[1.4] text-opacity-90 shadow-text">
                  Our team aims to bring in MetaCars community all car lovers
                  and racing gamers, and this will happen by organizing events
                  such as Car Shows etc. We are transparent while remaining
                  competitive. MetaCars is the coin of the people. That’s why we
                  ensure transparency by providing all the information to the
                  community. As a community project, we strive to grow with our
                  users, with their requests driving our development and
                  reinforcing MetaCars NFT & MetaCars Game. To guarantee a
                  healthy smart contract, free from any malicious function, we
                  will audit the MetaCars token contract address from
                  &quot;CertiK&quot; which will ensure investors who want to
                  invest in MetaCars.
                </p>
                <p className="flex items-center justify-end cursor-pointer text-[1.8rem] lg:text-[2.4rem] text-white font-futuralite leading-[1.4] text-opacity-90 shadow-text">
                  More Info
                  <svg
                    className="ml-4"
                    width="22"
                    height="14"
                    viewBox="0 0 22 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L11 11L20 2"
                      stroke="#D6D6D6"
                      strokeWidth="4"
                    />
                  </svg>
                </p>
              </div>
              <svg
                className="m-auto mt-[3rem]"
                width="53"
                height="51"
                viewBox="0 0 53 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26.5 0L49.4497 38.25H3.55033L26.5 0Z" fill="white" />
                <path
                  d="M24.1074 26.8174V13.5508H28.8174V26.8174H24.1074ZM23.9043 30.918C23.9043 30.207 24.154 29.6019 24.6533 29.1025C25.1357 28.5947 25.7324 28.3408 26.4434 28.3408C27.1882 28.3408 27.806 28.5863 28.2969 29.0771C28.7793 29.5596 29.0205 30.1732 29.0205 30.918C29.0205 31.6204 28.7708 32.2298 28.2715 32.7461C27.7552 33.2454 27.1458 33.4951 26.4434 33.4951C25.7663 33.4951 25.1696 33.2454 24.6533 32.7461C24.154 32.2467 23.9043 31.6374 23.9043 30.918Z"
                  fill="black"
                />
              </svg>
              <div className="w-full bg-black bg-opacity-40 py-5 pl-8 pr-4 md:-ml-8">
                <p className="text-[1.4rem] lg:text-[2rem] text-[#57C3FF] font-futuralite leading-[1.4] text-opacity-90 shadow-text text-center">
                  ‘10 mints maximum per transaction, no limit on mints per ETH
                  wallet’
                </p>
              </div>
            </div>
            <div className="w-full md:w-[40%] md:pl-8">
              <div className="item border-2 border-solid border-[#404040] p-4 bg-[#1D1D1D]">
                <img
                  className="w-full m-auto"
                  src={NftImage.src}
                  alt="nft-image"
                />
                <div className="details p-2">
                  <h2 className="text-[2.4rem] text-white font-futura py-4">
                    McQueen and his Buddies{' '}
                  </h2>
                  <p className="flex items-center text-[#E3E3E3] font-futura text-[1.4rem] mb-5">
                    Price 0.04{' '}
                    <img
                      className="w-[13px]"
                      src={Etheriam.src}
                      alt="nft-image"
                    />{' '}
                    per NFT
                  </p>
                  <div className="divider w-full h-[2px] bg-[#515151]" />
                  <div className="flex items-center justify-between py-8">
                    <div className="left text-[#9DA6AC] text-[2.4rem] font-futura">
                      <span className="text-white pr-1">-</span> 1{' '}
                      <span className="text-white pl-1">+</span>
                    </div>
                    <div className="middle text-[2.4rem] text-[#9DA6AC] font-futura">
                      Mints
                    </div>
                    <div className="right text-[2.4rem] text-[#3AACFF] font-futura">
                      10 Max
                    </div>
                  </div>
                  <div className="divider w-full h-[2px] bg-[#515151]" />
                  <div className="flex items-center justify-between py-8">
                    <div className="left text-[#9DA6AC] text-[2.4rem] font-futura">
                      Total
                    </div>
                    <div className="middle text-[2.4rem] text-[#9DA6AC] font-futura">
                      Mints
                    </div>
                    <div className="right text-[2.4rem] text-[#3AACFF] font-futura">
                      0.04ETH
                    </div>
                  </div>
                  <div className="divider w-full h-[2px] bg-[#515151]" />
                  <div className="btn py-8 text-center">
                    <Link href="#">
                      <a className="text-[3.2rem] text-[#3AACFF] font-futura">
                        Buy now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimYourNFTs;

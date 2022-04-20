import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const image1 = require('../assets/images/nftimage1.jpg');
const image2 = require('../assets/images/nftimage2.jpg');
const image3 = require('../assets/images/nftimage3.jpg');
const image4 = require('../assets/images/nftimage.jpg');
const eth = require('../assets/images/etheriam.png');

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const NFTs = [
  {
    id: '1',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image1,
  },
  {
    id: '2',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image2,
  },
  {
    id: '3',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image3,
  },
  {
    id: '4',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image4,
  },
  {
    id: '5',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image1,
  },
  {
    id: '6',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image2,
  },
  {
    id: '7',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image3,
  },
  {
    id: '8',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image4,
  },
  {
    id: '9',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '2.26K',
    image: image1,
  },
  {
    id: '10',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '8.26K',
    image: image2,
  },
  {
    id: '11',
    name: 'Lightning McQueen #240/420',
    author: 'McQueen and his Buddies',
    price: '9.26K',
    image: image3,
  },
];

const MintYourCharacter = () => {
  return (
    <div className="mint-character pb-[10rem]">
      <div className="title mb-7">
        <h2 className="font-brandon text-white text-[2.5rem] lg:text-[4rem] leading-[1.6] font-extrabold">
          Mint your character
        </h2>
        <h2 className="font-brandon text-[#9DA5AC] text-[2rem] leading-[1.6]">
          5,555 tems
        </h2>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {NFTs.map((e) => {
          return (
            <div
              className="item mx-4 border-2 border-solid border-[#404040] p-4 bg-[#1D1D1D]"
              key={e}
            >
              <div className="thumb flex h-[25rem] md:h-[30rem] lg:h-[35rem] overflow-hidden">
                <img
                  className="w-full m-auto object-cover object-center h-full"
                  src={e.image.default.src}
                  alt="nft-image"
                />
              </div>
              <div className="details px-2 py-4 font-futura">
                <div className="flex flex-wrap justify-between text-white">
                  <div className="left">
                    <h3 className="text-[1.2rem] text-[#9DA6AC] pb-3">
                      {e.author}
                    </h3>
                    <h2 className="text-[1.2rem]">{e.name}</h2>
                  </div>
                  <div className="right text-right">
                    <p className="pb-3">Price</p>
                    <p className="text-[1.4rem] font-brandon font-extrabold flex items-center justify-end">
                      <img
                        className="w-auto mr-1"
                        src={eth.default.src}
                        alt="nft-image"
                      />
                      {e.price}
                    </p>
                  </div>
                </div>
                <div className="btn mt-14 text-center">
                  <Link href="#">
                    <a className="text-[1.8rem] text-[#3AACFF] p-2">Buy now</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default MintYourCharacter;

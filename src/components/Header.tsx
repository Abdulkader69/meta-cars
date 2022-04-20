import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../assets/images/meta-cars-logo.png';

export default function Header() {
  const router = useRouter();
  return (
    <header
      id="main-header"
      className="py-4 fixed z-50 top-0 left-0 w-full bg-[#131313] bg-opacity-[85%]"
    >
      <div className="w-full max-w-siteContainer mx-auto px-4 flex items-center justify-center">
        <ul className="flex items-center justify-center">
          <li className="mx-10">
            <Link href="/">
              <a
                className={`text-[1.6rem] font-futura ${
                  router.pathname == '/' ? 'text-[#47B1FF]' : 'text-[#D6D6D6]'
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/about">
              <a
                className={`text-[1.6rem] font-futura ${
                  router.pathname == '/about'
                    ? 'text-[#47B1FF]'
                    : 'text-[#D6D6D6]'
                }`}
              >
                About
              </a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/">
              <a
                className={`text-[1.6rem] font-futura ${
                  router.pathname == '/' ? 'text-[#47B1FF]' : 'text-[#D6D6D6]'
                }`}
              >
                <img
                  className="w-full max-w-[10rem] m-auto"
                  src={Logo.src}
                  alt="logo"
                />
              </a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/whitepaper">
              <a
                className={`text-[1.6rem] font-futura ${
                  router.pathname == '/whitepaper'
                    ? 'text-[#47B1FF]'
                    : 'text-[#D6D6D6]'
                }`}
              >
                WhitePaper
              </a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/mint">
              <a
                className={`text-[1.6rem] font-futura ${
                  router.pathname == '/mint'
                    ? 'text-[#47B1FF]'
                    : 'text-[#D6D6D6]'
                }`}
              >
                Mint
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

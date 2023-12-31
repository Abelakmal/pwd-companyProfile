import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <footer className=" text-white lg:h-96 max-md:h-full flex items-center  mt-20 relative scroll-smooth">
      <Link href={'#up'}>
        <button className="bg-white rounded-full h-12 w-12 absolute top-0 border-t-4 border-cyan-950  right-1/2 mb-4" aria-label="up">
          <FontAwesomeIcon icon={faArrowUp} className="h-12 w-12  text-cyan-700" />
        </button>
      </Link>
      <section className="flex max-md:flex-col max-md:items-center  max-md:justify-evenly max-md:py-4 p-2 gap-4 w-full h-full mt-10 pt-12 bg-[hsl(216,100%,17%)] text-[12px] max-md:px-3">
        <div className="w-full lg:ml-6">
          <div className="lg:mb-4 lg:ml-[-20px] lg:mt-[-20px] ">
            <Image src="/logo.webp" alt="logo perusahan" width={200} height={100} quality={100} />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Dolorum eum quaerat deserunt qui ullam{' '}
          </p>
          <ul className="flex gap-3 mt-4">
            <li>
              <Link href={'https://www.facebook.com/'} aria-label='facebook' target='_black'>
                <FontAwesomeIcon icon={faFacebookF} className="text-white h-5" />
              </Link>
            </li>
            <li>
              <Link href={'https://www.instagram.com/'} aria-label='instagram' target='_blank'>
              <FontAwesomeIcon icon={faInstagram} className="text-white h-5" />
              </Link>
            </li>
            <li>
              <Link href={'https://twitter.com/'} aria-label='twiter' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} className="text-white h-5" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h1 className="mb-4">Recent Projects</h1>
          <div className="flex my-2">
            <Image src="/hero.webp" width={100} height={100} alt="gambar gedung" className="rounded-lg mr-2 h-16 object-cover" />
            <p>
              2972 Westheimer Rd. <br /> santa Ana, Illions 85485.
            </p>
          </div>
          <div className="flex">
            <Image src="/img2.webp" width={100} height={100} alt="gambar gedung" className="rounded-lg mr-2 h-16 object-cover" />
            <p>
              2972 Westheimer Rd. <br /> santa Ana, Illions 85485.
            </p>
          </div>
        </div>
        <div className="w-full">
          <h1>Contact Info</h1>
          <p className="mb-4">
            2972 Westheimer Rd. santa Ana, <br /> Illions 85485
          </p>
          <ul>
            <li>
              <span className="opacity-60">Phone: </span>(239) 555-0108
            </li>
            <li>
              <span className="opacity-60">Email: </span>abcd@domain.com
            </li>
            <li>
              <span className="opacity-60">Website: </span>abcd@domain.in
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

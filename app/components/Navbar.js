'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed z-50 ">
      <section className="flex justify-around max-md:justify-between max-md:pr-6 max-xl:justify-between   p-3 bg-slate-600 text-white w-screen items-center ">
        <div className="xl:w-1/2">
          <Image src="/logo.png" alt="logo perusaan" width={140} height={100} quality={100} />
        </div>

        <ul className="xl:flex justify-around w-1/2 max-md:hidden max-xl:hidden max-xl:justify-between">
          <li>
            <Link href="/" className="hover:text-cyan-700 hover:underline font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-cyan-700 hover:underline font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-cyan-700 hover:underline font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-cyan-700 hover:underline font-medium">
              Teams
            </Link>
          </li>
          <li className='bg-orange-500 px-6 py-1 rounded-md hover:bg-orange-600'>
            <Link href='/contact' >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="relative xl:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </section>
      {open && (
        <section className="h-screen w-screen bg-slate-600 xl:hidden">
          <ul className="flex flex-col justify-evenly items-center h-full text-white">
            <li>
              <Link href="/" className="hover:text-cyan-700 hover:underline font-medium" onClick={() => setOpen(!open)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-700 hover:underline font-medium" onClick={() => setOpen(!open)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-cyan-700 hover:underline font-medium" onClick={() => setOpen(!open)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-cyan-700 hover:underline font-medium" onClick={() => setOpen(!open)}>
                Teams
              </Link>
            </li>
            <li className='bg-orange-500 px-6 py-1 rounded-md hover:bg-orange-600'>
            <Link href='/contact' >
              Contact
            </Link>
          </li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;

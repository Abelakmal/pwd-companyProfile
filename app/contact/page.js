import React from 'react';
import Directory from '../components/Directory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const page = () => {
  return (
    <section>
      <Directory directory={'Contact'} />
      <div className="flex flex-col items-center justify-center w-screen relative">
        <Image src={'/map.jpg'} width={1400} height={80} alt="map image" className="w-screen h-96 object-cover  mt-[20rem]" />
        <div className="border-2 rounded-2xl lg:grid grid-cols-2 p-12 gap-2 shadow-2xl absolute bg-white  top-20">
          <h1 className="text-cyan-950 font-semibold text-2xl col-span-2">
            Feel free to{' '}
            <span className="font-bold text-orange-800">
              contact <br />
              us
            </span>{' '}
            for any query.
          </h1>
          <ul className="grid gap-4 w-max h-max  max-md:mt-6">
            <li className="flex bg-neutral-800 rounded-full pr-2">
              <div className="rounded-full bg-orange-500 p-5 w-max">
                <FontAwesomeIcon icon={faPhone} className="text-white w-6 h-6 " />
              </div>
              <div className="text-white pl-2">
                <h2>Phone Number:</h2>
                <p>Office: 202-824-8405</p>
              </div>
            </li>
            <li className="flex bg-neutral-800 rounded-full pr-2">
              <div className="rounded-full bg-orange-500 p-5 w-max">
                <FontAwesomeIcon icon={faPhone} className="text-white w-6 h-6" />
              </div>
              <div className="text-white pl-2">
                <h2>Mail Addreess:</h2>
                <p>info.contact@contractors.com</p>
              </div>
            </li>
            <li className="flex bg-neutral-800 rounded-full pr-2">
              <div className="rounded-full bg-orange-500 p-5 w-max">
                <FontAwesomeIcon icon={faPhone} className="text-white w-8 h-8" />
              </div>
              <div className="text-white pl-2">
                <h2>Office Address:</h2>
                <p>
                  4464 Massachussetts Avenue <br />
                  Washington, DC 20005
                </p>
              </div>
            </li>
          </ul>
          <div className='max-md:mt-6'>
            <h2 className="text-2xl font-bold font-mono">Masukan Permitaan</h2>
            <form className="grid grid-cols-2  gap-3 h-max">
              <input type="text" placeholder="Fritsname" maxLength={50} className="bg-orange-50 p-2 rounded-lg border-2 border-black shadow-lg" />
              <input type="text" placeholder="Lastname" maxLength={50} className="bg-orange-50 p-2 rounded-lg border-2 border-black shadow-lg" />
              <input type="email" placeholder="Mail Adress" className="bg-orange-50 p-2 rounded-lg border-2 border-black shadow-lg" />
              <input type="tel" placeholder="Phone Number" maxLength={16} pattern="[0-9]" className="bg-orange-50 p-2 rounded-lg border-2 border-black shadow-lg" />
              <input type="tel" placeholder="Enter Message" className="col-span-2 pb-20 pl-2 bg-orange-50 p-2 rounded-lg border-2 border-black shadow-lg" />
              <button className="bg-orange-800 w-max hover:bg-orange-900 text-white p-1 rounded-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

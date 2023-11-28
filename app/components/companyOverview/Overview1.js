import React from 'react';
import { faChartColumn, faHeadset, faPuzzlePiece, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Overview1 = () => {
  return (
    <section className="lg:p-20 max-md:text-sm max-md:p-10">
      <h1 className="text-orange-500 font-bold">Building a Legacy</h1>
      <h2 className="text-cyan-950 text-4xl font-bold my-2">
        Building a Legacy <br /> of Success
      </h2>
      <div className="lg:flex">
        <div className="lg:w-1/3">
          <p className="">
            In the realm of engineering and construction, we embark on a journey marked by precision, innovation, and the relentless pursuit of excellence. Our commitment to shaping skylines and crafting infrastructure goes beyond the
            concrete and steel
          </p>
          <Link href="/about">
            <button className="bg-orange-500 text-white p-1 rounded hover:bg-orange-600 mt-2">More {'>'}</button>
          </Link>
        </div>
        <ul className="flex bg-orange-50 lg:h-64 lg:p-12 lg:gap-2 max-md:flex-col max-md:justify-evenly max-md:items-center h-max max-md:mt-9 max-md:py-4">
          <li className="hover:border-2 group max-md:p-8  w-52 rounded-3xl hover:bg-white flex flex-col justify-center hover:shadow-lg">
            <FontAwesomeIcon icon={faPuzzlePiece} className="text-orange-500 h-12" />
            <h1 className="font-bold py-1 text-cyan-950 text-center">Strategy</h1>
            <p className="pl-2 hidden group-hover:block">Lorem, ipsum dolor sit amet.</p>
          </li>
          <li className="hover:border-2  w-52 max-md:p-8 hover:rounded-3xl hover:bg-white flex flex-col justify-center group hover:shadow-lg">
            <FontAwesomeIcon icon={faChartColumn} className="text-orange-500 h-12" />
            <h1 className=" font-bold py-1 text-cyan-950 text-center">Results</h1>
            <p className="pl-2 hidden group-hover:block">Lorem, ipsum dolor sit amet.</p>
          </li>
          <li className="hover:border-2  w-52 max-md:p-8 hover:rounded-3xl hover:bg-white flex flex-col justify-center group hover:shadow-lg">
            <FontAwesomeIcon icon={faStar} className="text-orange-500 h-12" />
            <h1 className=" font-bold py-1 text-cyan-950 text-center">Expertise</h1>
            <p className="pl-2 hidden group-hover:block">Lorem, ipsum dolor sit amet.</p>
          </li>
          <li className="hover:border-2  w-52 max-md:p-8 hover:rounded-3xl hover:bg-white flex flex-col justify-center group hover:shadow-lg">
            <FontAwesomeIcon icon={faHeadset} className="text-orange-500 h-12" />
            <h1 className=" font-bold py-1 text-cyan-950 text-center">Support 24/7</h1>
            <p className="pl-2 hidden group-hover:block">Lorem, ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Overview1;

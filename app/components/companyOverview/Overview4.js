import React from 'react';
import { faClipboardList, faHelmetSafety, faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Overview4 = () => {
  return (
    <section className="mt-20">
      <div className="absolute bg-[rgb(15,38,77)] h-[35rem]  lg:w-1/2 opacity-90">
        <h1 className="text-orange-600 font-bold pl-3 pt-2 max-md:text-sm">Building a Legacy</h1>
        <div className=" pl-5">
          <h2 className="font-bold text-white text-3xl my-3 ">
            Stunning structures, <br /> sustainably built
          </h2>
          <p className="text-white max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui, sed numquam itaque sapiente unde natus molestias. Obcaecati, debitis! Minima molestias ducimus beatae optio est? Maxime nulla repellat accusantium eos.
          </p>
          <ul className="text-white grid grid-cols-2 mt-6 gap-4 max-md:text-sm">
            <li>
              <FontAwesomeIcon icon={faClipboardList} className="text-orange-600 h-12 max-md:h-6" />
              <h3 className="font-bold my-1 ">Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHelmetSafety} className="text-orange-600 h-12 max-md:h-6" />
              <h3 className="font-bold my-1">Engineering</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaintRoller} className="text-orange-600 h-12 max-md:h-6" />
              <h3 className="font-bold my-1">Renovations</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faScrewdriverWrench} className="text-orange-600 h-12 max-md:h-6" />
              <h3 className="font-bold my-1">Maintenance</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
            </li>
          </ul>
        </div>
      </div>
      <Image src="/image4.webp" width={1000} height={100} className="w-screen h-[35rem] object-cover" alt="gambar bangunan" />
    </section>
  );
};

export default Overview4;

import React from 'react';
import Directory from '../components/Directory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHelmetSafety, faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section>
      <Directory directory={'Services'} />
      <header className="text-center  p-12">
        <h1 className="font-bold text-4xl text-[rgb(8,51,68)] pb-4">Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem atque rerum vitae esse</p>
      </header>
      <section className="bg-[rgb(242,243,246)] flex justify-center">
        <ul className=" grid grid-cols-2 max-md:grid-cols-1 mt-6 gap-4 text-center lg:p-20 max-md:p-8">
          <li className="lg:hover:bg-white max-md:bg-white  lg:w-96 h-64 max-md:p-2 lg:hover:shadow-xl max-md:shadow-xl group lg:hover:rounded-lg max-md:rounded-lg flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faClipboardList} className="text-[rgb(22,54,105)] h-12 lg:group-hover:text-orange-400 max-md:text-orange-400" />
            <h3 className="font-bold my-1 lg:group-hover:border-b-2 border-b-2 lg:group-hover:border-orange-400 max-md:border-orange-400 w-max ">Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
          </li>
          <li className="lg:hover:bg-white max-md:bg-white  lg:w-96 h-64 max-md:p-2 lg:hover:shadow-xl max-md:shadow-xl group lg:hover:rounded-lg max-md:rounded-lg flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faHelmetSafety} className="text-[rgb(22,54,105)] h-12 lg:group-hover:text-orange-400 max-md:text-orange-400" />
            <h3 className="font-bold my-1 lg:group-hover:border-b-2 border-b-2 lg:group-hover:border-orange-400 max-md:border-orange-400 w-max ">Engineering</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
          </li>
          <li className="lg:hover:bg-white max-md:bg-white  lg:w-96 h-64 max-md:p-2 lg:hover:shadow-xl max-md:shadow-xl group lg:hover:rounded-lg max-md:rounded-lg flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faPaintRoller} className="text-[rgb(22,54,105)] h-12 lg:group-hover:text-orange-400 max-md:text-orange-400" />
            <h3 className="font-bold my-1 lg:group-hover:border-b-2 border-b-2 lg:group-hover:border-orange-400 max-md:border-orange-400 w-max ">Renovations</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
          </li>
          <li className="lg:hover:bg-white max-md:bg-white  lg:w-96 h-64 max-md:p-2 lg:hover:shadow-xl max-md:shadow-xl group lg:hover:rounded-lg max-md:rounded-lg flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-[rgb(22,54,105)] h-12 lg:group-hover:text-orange-400 max-md:text-orange-400" />
            <h3 className="font-bold my-1 lg:group-hover:border-b-2 border-b-2 lg:group-hover:border-orange-400 max-md:border-orange-400 w-max ">Maintenance</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet perferendis </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Services;

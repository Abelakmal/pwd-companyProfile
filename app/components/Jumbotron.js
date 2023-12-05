import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Jumbotron = () => {
  return (
    <section className=" scroll-smooth" id="up">
      <Image src="/hero3.jpg" width={1480}  height={100} alt="main image" className="h-screen absolute object-cover" />
      <div className="flex flex-col backdrop-blur-sm xl:w-1/2   h-screen justify-between">
        <div className=" text-white flex flex-col justify-center xl:pl-20 max-md:pl-12 mt-28 max-xl:p-20">
          <h1 className="text-4xl max-md:text-2xl font-bold mb-4">
            Engineers & <br /> Contractors
          </h1>
          <p className="mb-2">Membangun Masa Depan dengan Teknik yang Terdepan dan Dedikasi yang Tak Tertandingi. Inovasi dalam Setiap Pekerjaan, Integritas dalam Setiap Konstruksi.</p>
          <div>
            <Link href="/services">
              <button className="rounded bg-orange-500 p-1 hover:bg-orange-600">Our services</button>
            </Link>
          </div>
        </div>
        <div className="z-50 flex justify-center w-full">
          <ul className="h-28 bg-[rgb(22,54,105)] opacity-80 text-white w-full  rounded-t-md flex justify-evenly  items-center">
            <li className="group hover:bg-orange-500 w-full h-full text-center   max-md:pt-10">
              <span className="xl:text-2xl max-xl:text-3xl font-bold max-md:text-xs border-b-2 border-orange-500 group-hover:border-[rgb(22,54,105)]">37 </span>Project <br />
              <span className="font-bold xl:text-3xl max-xl:text-3xl max-md:text-xs">Designs</span>
            </li>
            <li className="hover:bg-orange-500 w-full h-full text-center group max-md:pt-10 ">
              <span className="xl:text-2xl max-xl:text-3xl font-bold max-md:text-xs border-b-2 border-orange-500 group-hover:border-[rgb(22,54,105)]">97 </span>Project <br />
              <span className="font-bold xl:text-3xl max-xl:text-3xl max-md:text-xs">Clients</span>
            </li>
            <li className="hover:bg-orange-500 w-full h-full text-center group max-md:pt-10 ">
              <span className="xl:text-2xl max-xl:text-3xl font-bold border-b-2 max-md:text-xs border-orange-500 group-hover:border-[rgb(22,54,105)]">25 </span>Complete <br />
              <span className="font-bold xl:text-3xl max-xl:text-3xl max-md:text-xs">Projects</span>
            </li>
            <li className="hover:bg-orange-500 w-full h-full text-center group max-md:pt-10 ">
              <span className="xl:text-2xl max-xl:text-3xl font-bold border-b-2 max-md:text-xs border-orange-500 group-hover:border-[rgb(22,54,105)]">97% </span>Clients <br />
              <span className="font-bold xl:text-3xl  max-xl:text-3xl max-md:text-xs">Satisfaction</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

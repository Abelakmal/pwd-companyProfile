'use client';
import { faChartColumn, faClipboardList, faHeadset, faHelmetSafety, faPaintRoller, faPuzzlePiece, faScrewdriverWrench, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Directory from '../components/Directory';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  return (
    <section>
      <Directory directory={'About us'} />
      <section className="flex max-md:flex-col max-md:items-center justify-center lg:mt-32 max-md:mt-12">
        <div className="lg:w-1/2 lg:ml-20 max-md:mx-4">
          <div className="h-20 bg-[rgb(130,191,251)] text-cyan-950 absolute opacity-80 rounded-r-lg mt-20">
            <h2 className="flex items-center font-bold text-xl ">
              <span className="text-4xl font-bold ml-2">25</span>+
              <span className="ml-4 py-3 pr-3 text-xl font-semibold">
                {' '}
                Years of <br /> Expriences
              </span>
            </h2>
          </div>
          <Image src="/aboutImg.jpg" width={500} height={100} alt="bangunan belum jadi" className="w-72 h-96 rounded-xl object-cover" />
        </div>
        <div className="lg:ml-20 max-md:mx-4">
          <h2 className="font-bold text-green-950 max-md:text-2xl max-md:py-6">About us</h2>
          <h3 className="font-semibold text-3xl text-cyan-950 my-5">
            Building a legacy <br />
            of Success
          </h3>
          <p className='leading-relaxed'>
            In the realm of engineering and construction, we embark on a journey marked by precision, innovation, and the relentless pursuit of excellence. Our commitment to shaping skylines and crafting infrastructure goes beyond the
            concrete and steel. It's a dedication to turning blueprints into living, breathing structures that stand the test of time.
          </p>
          <p className='py-2'>
            With a foundation built on technical prowess and a spirit of ingenuity, our team of engineers and constructors thrives on challenges. Every project is an opportunity to redefine boundaries, to engineer solutions that not only
            meet but exceed expectations. From groundbreaking designs to the meticulous execution of construction, we take pride in every weld, every rivet, and every line of code that brings our visions to life.
          </p>
          <p>
            As we forge ahead, we carry with us the legacy of those who came before — a legacy of success forged through determination and an unwavering commitment to craftsmanship. Together, we are not just building structures; we are
            constructing the future, one milestone at a time.
          </p>
          <div className="lg:w-1/2 lg:ml-6 mt-5">
            <ul className="grid grid-cols-2 gap-4 mb-6">
              <li className="lg:flex">
                <FontAwesomeIcon icon={faPuzzlePiece} className="text-orange-500 h-12 bg-orange-200 p-2 rounded-full" />
                <h1 className="lg:pl-3 font-bold py-1 text-cyan-950">Strategy</h1>
              </li>
              <li className="lg:flex">
                <FontAwesomeIcon icon={faChartColumn} className="text-orange-500 h-12 bg-orange-200 p-2 rounded-full" />
                <h1 className="lg:pl-3 font-bold py-1 text-cyan-950">Results</h1>
              </li>
              <li className="lg:flex">
                <FontAwesomeIcon icon={faStar} className="text-orange-500 h-12 bg-orange-200 p-2 rounded-full" />
                <h1 className="lg:pl-3 font-bold py-1 text-cyan-950">Expertise</h1>
              </li>
              <li className="lg:flex">
                <FontAwesomeIcon icon={faHeadset} className="text-orange-500 h-12 bg-orange-200 p-2 rounded-full" />
                <h1 className="lg:pl-3 font-bold py-1 text-cyan-950">Support 24/7</h1>
              </li>
            </ul>
            <p className="border-l-8 border-orange-600 lg:pl-4 bg-orange-100">Lorem ipsum, dolor sit amet Possimus eligendi earum labore et facilis ab, ex sapiente ducimus odio maxime minima, illum molestias ut iure a at. Ullam, sit est.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

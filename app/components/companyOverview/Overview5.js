import Image from 'next/image';
import React from 'react';

const Overview5 = () => {
  return (
    <section className="mt-20 text-center bg-gray-300 lg:h-96 max-md:h-full max-md:py-20">
      <h1 className="text-orange-500 font-bold">Our clients</h1>
      <h2 className="text-cyan-950 text-4xl font-bold">What they say</h2>
      <div className="flex justify-evenly max-md:flex-col m-4  gap-4">
        <div className="h-65 shadow-xl border rounded p-4 bg-white ">
          <p className="border-l-2 border-orange-600 bg-gray-100 opacity-90">
            Working with Contractors was a game-changer for our project. Their engineering and construction expertise shone through every phase. The team's commitment to quality, innovation, and timely delivery exceeded our expectations.
            Truly a top-notch partner in the industry!"
          </p>
          <div className="flex mt-4">
            <Image src="/person1.webp" height={60} width={70} className="rounded-full h-16 object-cover " alt="Edward D.Best" />
            <div className="text-start ml-4">
              <h3 className="text-orange-500 font-bold">Edward D.Best</h3>
              <p>Business</p>
            </div>
          </div>
        </div>
        <div className="h-65 shadow-xl border rounded p-4 bg-white ">
          <p className="border-l-2 border-orange-600 bg-gray-100 opacity-90">
            Choosing Contractors for our construction needs was the best decision we made. Their attention to detail, skilled craftsmanship, and ability to tackle complex engineering challenges set them apart. From the initial concept to
            the final build, the team demonstrated professionalism and dedication. Highly recommend!"
          </p>
          <div className="flex mt-4">
            <Image src="/person3.jpg" height={60} width={70} className="rounded-full h-16 object-cover " alt="Leslie M. Reich" />
            <div className="text-start ml-4">
              <h3 className="text-orange-500 font-bold">Leslie M. Reich</h3>
              <p>Business</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl border rounded p-4 bg-white ">
          <p className="border-l-2 border-orange-600 bg-gray-100 opacity-90">
            Impressed by the seamless collaboration with Contractors. Their engineers and constructors demonstrated a deep understanding of our vision and turned it into a reality. The finished project not only met but surpassed our
            standards. Exceptional work from a reliable and visionary team.
          </p>
          <div className="flex mt-4">
            <Image src="/person2.jpg" height={60} width={70} className="rounded-full h-16 object-cover " alt="Domie T. Modie" />
            <div className="text-start ml-4">
              <h3 className="text-orange-500 font-bold">Domie T. Modie</h3>
              <p>Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview5;

import Image from 'next/image';
import React from 'react';

const Overview2 = () => {
  return (
    <section>
      <div className="bg-[rgb(243,114,63)] h-96 w-full absolute opacity-90 flex justify-center items-center">
        <p className="text-white w-[50rem] text-2xl max-md:text-lg max-md:p-2 !opacity-100 font-semibold z-[999]">
          <span className="border-b-2 border-white pr-20 mr-2"></span>We are one of <span className="text-cyan-950">the largest construction</span> and develovment companies in the world, and we want to improve society and the future
          throught our efforts and expertise.
        </p>
      </div>
      <Image src="/hero.jpg" width={500} height={500} alt='gambar bangunan' className="w-screen h-96 object-cover" />
    </section>
  );
};

export default Overview2;

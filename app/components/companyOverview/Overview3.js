import React from 'react';

const Overview3 = () => {
  return (
    <section className="lg:flex mx-4 mt-20 gap-3">
      <div className="grid grid-cols-2 lg:w-1/2">
        <div className="h-full">
          <img src="/img1.webp" alt="gambar bangunan" />
        </div>
        <div className="lg:row-span-2">
          <img src="/img3.jpg" alt="gambar bangunan" className=" h-full object-cover" />
        </div>
        <div className="h-full max-md:h-32 w-full  max-md:col-start-1 max-md:col-end-3 ">
          <img src="/img2.jpg" alt="gambar bangunan" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="lg:w-1/2  p-2">
        <h1 className="mb-4">
          <span className="text-orange-500 font-bold">We are</span> <br />{' '}
          <span className="text-cyan-950 font-bold text-4xl">
            The one of the largest <br /> construction
          </span>
        </h1>
        <p className="mb-2">
          standing at the forefront of the industry. Our commitment to excellence defines us as we undertake projects that shape the world around us. With precision, innovation, and a relentless pursuit of quality, we have become a trusted
          name, transforming visions into reality.
        </p>
        <p>
          In the dynamic realm of construction, every structure we build tells a story of craftsmanship and dedication. From the foundation to the finishing touches, we approach each project with a passion for creating enduring landmarks.
          Our experienced team brings expertise to every facet of construction, ensuring that each endeavor reflects not only our commitment to quality but also our vision for a sustainable and impactful future.
        </p>
        <button className="text-white bg-orange-400 hover:bg-orange-500 p-1 rounded mt-6">More {'>'}</button>
      </div>
    </section>
  );
};

export default Overview3;

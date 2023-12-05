import Image from 'next/image';
import React from 'react';

const Overview3 = () => {
  return (
    <section className="lg:flex mx-4 mt-20 gap-3 justify-evenly">
      <div className="lg:w-1/2  p-2">
        <h1 className="mb-4">
          <span className="text-orange-800 font-bold">We are</span> <br />{' '}
          <span className="text-cyan-950 font-bold text-4xl">
            The one of the largest <br /> construction
          </span>
        </h1>
        <Image src={'/img1.webp'} width={1280} height={ 853} className="block lg:hidden my-4" alt="gambar bangunan" />
        <p className="mb-2">
          standing at the forefront of the industry. Our commitment to excellence defines us as we undertake projects that shape the world around us. With precision, innovation, and a relentless pursuit of quality, we have become a trusted
          name, transforming visions into reality.
        </p>
        <p>
          In the dynamic realm of construction, every structure we build tells a story of craftsmanship and dedication. From the foundation to the finishing touches, we approach each project with a passion for creating enduring landmarks.
          Our experienced team brings expertise to every facet of construction, ensuring that each endeavor reflects not only our commitment to quality but also our vision for a sustainable and impactful future.
        </p>
      </div>
      <div>
        <Image src={'/img1.webp'} width={800} height={200} className="hidden lg:block" alt="gambar bangunan" />
      </div>
    </section>
  );
};

export default Overview3;

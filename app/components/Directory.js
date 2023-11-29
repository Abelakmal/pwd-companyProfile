import Link from 'next/link';
import React from 'react';

const Directory = ({directory}) => {
  return (
    <section className='w-full lg:h-96 max-md:pb-4 bg-[rgb(242,243,246)] lg:pt-40 max-md:pt-24 max-md:pl-12 lg:pl-20'>
      <h1 className="text-4xl max-md:text-lg font-bold text-cyan-950 ">{directory}</h1>
      <span>
        <Link href={'/'} className="text-cyan-700 hover:underline max-md:text-sm">
          Home
        </Link>{' '}
        {'>'}
        {' '}
        <span className="text-green-900 font-bold max-md:text-sm">{directory}</span>
      </span>
    </section>
  );
};

export default Directory;

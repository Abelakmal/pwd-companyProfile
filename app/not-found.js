import Link from 'next/link';

const notFound = () => {
  return (
    <section className="h-screen flex justify-center items-center ">
      <div className="relative flex justify-center w-screen">
        <h1 className="text-8xl font-bold flex">
          <div className="z-40 absolute text-cyan-950">4</div>
          <div className="z-30 absolute ml-10 text-orange-700">0</div>
          <div className="z-20 absolute ml-20 text-cyan-950">4</div>
        </h1>
        <div className="relative ml-40">
          <p className="text-cyan-950 text-3xl font-semibold">
            oops! The page you <br /> requested wa not found!
          </p>
          <p>Sorry, But the page you are looking for does't exist!</p>
          <Link href={'/'}>
            <button className="bg-orange-900 text-white p-2 rounded-2xl hover:bg-orange-950 mt-3">Back to home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default notFound;

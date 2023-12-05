import React from 'react';
import Directory from '../components/Directory';
import Image from 'next/image';
import Overview6 from '../components/companyOverview/Overview6';

const Teams = async () => {
  const respone = await fetch('https://randomuser.me/api/?results=6', { next: { revalidate: 60  } });
  const { results } = await respone.json();
  const title = ["Project Engineer","Construction Manager","Structural Engineer","Civil Engineering Specialist","Mechanical Project Coordinator","Electrical Systems Engineer"]
  return (
    <section>
      <Directory directory={'Teams'} />
      <section className="flex flex-col items-center">
        <section className="text-center p-12">
          <h1 className="font-bold text-3xl text-cyan-900 ">Meet Our Teams</h1>
          <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reprehenderit facere eum nesciunt </p>
        </section>
        <section className="bg-[rgb(242,243,246)] w-full grid gap-4 grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2 max-md:gap-2 max-md:p-3">
          {results.map((item, index) => {
            return (
              <div className="bg-white rounded-md p-6  shadow-md w-full flex flex-col items-center justify-center " key={item.id.name}>
                <h2 className="text-xl font-semibold">{title[index]}</h2>
                <Image src={item.picture.large} width={300} height={200} alt="test" className="rounded-full" />
                <ul className="mt-10">
                  <li>Name : {`${item.name.first}  ${results[0].name.last}`}</li>
                  <li>Location: {`${item.location.country}/${item.location.state}`}</li>
                  <li>Email: {`${item.email}`}</li>
                  <li>Phone: {`${item.phone}`}</li>
                </ul>
              </div>
            );
          })}
          <div></div>
        </section>
      </section>
      <Overview6 />
    </section>
  );
};

export default Teams;

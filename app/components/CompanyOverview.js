import React from 'react';
import Overview1 from './companyOverview/Overview1';
import Overview2 from './companyOverview/Overview2';
import Overview3 from './companyOverview/Overview3';
import Overview4 from './companyOverview/Overview4';
import Overview5 from './companyOverview/Overview5';
import Overview6 from './companyOverview/Overview6';

const CompanyOverview = () => {
  return (
    <section className='scroll-smooth'>
      <Overview1 />
      <Overview2 />
      <Overview3 />
      <Overview4 />
      <Overview5 />
      <Overview6 />
    </section>
  );
};

export default CompanyOverview;

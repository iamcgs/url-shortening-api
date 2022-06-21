import React from 'react';
import Card from './Card';
import IconBrand from '../images/icon-brand-recognition.svg';
import IconDetailedRecords from '../images/icon-detailed-records.svg';
import IconCustomizable from '../images/icon-fully-customizable.svg';

function Statistics() {
  return (
    <>
      <section className="bg-gray-100 pt-20 pb-16">
        <div className="px-6 text-center">
          <h2 className=" mb-6 text-[1.6rem] font-bold text-veryDarkViolet lg:mb-4">
            Advanced Statistics
          </h2>
          <p className="leading-[1.85] tracking-wide text-grayishViolet lg:mx-auto lg:w-[40%]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      <section className="relative flex flex-col gap-28 bg-slate-100 p-6 pb-20 xl:h-[400px] xl:flex-row xl:items-center xl:gap-4 xl:px-28 xl:pb-12">
        <div className="absolute top-[12%] left-1/2 h-[70%] w-3 -translate-x-1/2 bg-cyanClr xl:top-[10.5rem] xl:h-3 xl:w-[70%]"></div>
        <div className="xl:w-full xl:self-start">
          <Card>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-darkViolet p-7">
              <img src={IconBrand} alt="/" />
            </div>
            <h2 className="mb-4 mt-8 text-xl font-bold">Brand Recognition</h2>
            <p className="text-sm tracking-wide text-grayishViolet">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>
        </div>
        <div className="xl:w-full">
          <Card>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-darkViolet p-7">
              <img src={IconDetailedRecords} alt="/" />
            </div>
            <h2 className="mb-4 mt-8 text-xl font-bold"> Detailed Records</h2>
            <p className="text-sm tracking-wide text-grayishViolet">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </Card>
        </div>
        <div className="xl:w-full xl:self-end">
          <Card>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-darkViolet p-7">
              <img src={IconCustomizable} alt="/" />
            </div>
            <h2 className="mb-4 mt-8 text-xl font-bold">Fully Customizable</h2>
            <p className="text-sm tracking-wide text-grayishViolet">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Statistics;

import React from 'react';
import im4 from '../images/bubble8.png';
import im5 from '../images/bubble9.png';

const AboutUs = () => {
  return (
    <section id="about_us" className="flex flex-col md:flex-row w-full font-raleway">
      <div className="bg-[#ffaed5] flex flex-col md:flex-row w-full md:w-1/2">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
          <h1 className="font-medium text-2xl mb-3 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem ipsum</p>
          <button className="bg-[#e0de90] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">
            Order now
          </button>
        </div>
        <div className="flex flex-col items-center md:justify-end md:items-end">
          <img src={im4} className="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt="" />
        </div>
      </div>

      <div className="bg-[#e0de90] flex flex-col md:flex-row w-full md:w-1/2">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
          <h1 className="font-medium text-2xl mb-3 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem, ipsum</p>
          <button className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">
            Order now
          </button>
        </div>
        <div className="flex flex-col items-center md:justify-end md:items-end">
          <img src={im5} className="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

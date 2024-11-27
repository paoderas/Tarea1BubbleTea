import React from 'react';
import image4 from '../images/Boba_Tea-removebg-preview.png'

const MainSection =()=>{
    return (

        <section className="bg-[#fedfdd] w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-10 order-2 md:order-1">
            <div className="text-center px-5 sm:px-5 md:px-14 lg:px-28 md:pt-8">
              <h1 className="font-satisfy text-4xl pb-3">Bubble Tea</h1>
              <p className="font-raleway text-xs md:text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius numquam dolor recusandae ipsum
                quibusdam, voluptatibus facilis dolores maiores perferendis.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-5 order-1 md:order-2">
            <div className="px-8 md:px-16 lg:px-32 py-5 md:py-0">
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </section>
    );

};


export default MainSection
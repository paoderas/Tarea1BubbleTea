import React from 'react';
import bubble1 from '../images/bubble1.png'; // Importa las imágenes
import bubble2 from '../images/bubble2.png';
import bubble3 from '../images/bubble3.png';
import bubble4 from '../images/bubble4.png';
import bubble7 from '../images/bubble7.png';
import bubble6 from '../images/bubble6.png';

const ServicesSection = () => {
  const images = [bubble1, bubble2, bubble3, bubble4, bubble7, bubble6]; // Arreglo con todas las imágenes

  return (
    <section id="services" className="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
      <h1 className="text-center font-bold">Do you want to try our flavors?</h1>
      <div className="flex flex-wrap md:flex-row w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6"
          >
            <img src={img} className="w-32 h-32" alt={`bubble${index + 1}`} />
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;



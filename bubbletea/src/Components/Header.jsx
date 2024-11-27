import React from 'react';
import cafeImage from '../images/cafe-removebg-preview.png' 

const Header = () => {
  return (
    <header className="text-gray-600 body-font mt-20">
      <div className="bg-[#5b4b45] flex flex-wrap flex-col md:flex-row items-center px-5 py-5 fixed top-0 left-0 right-0">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-white text-sm md:text-base md:ml-auto">
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#home">
            Home
          </a>
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#services">
            Services
          </a>
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#about_us">
            About us
          </a>
          <a className="hover:text-[#e0de90] font-medium cursor-pointer" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#home"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img src={cafeImage} alt="Logo del Café" className="w-32" /> {/* Ajusta el tamaño si es necesario */}
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end md:ml-3 lg:ml-0">
          <button
            onClick={() => alert('Redirecting to purchase page!')}
            className="hidden md:inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:text-[#5b4b45] font-medium hover:bg-white rounded-lg text-white text-base mt-4 md:mt-0"
          >
            Buy now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/cafe-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} className="w-32" alt="Cafe logo" />
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl p-5" />
          <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl p-5" />
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl p-5" />
        </div>
      </div>

      <div className="flex flex-col hidden md:block">
        <h1 className="font-bold text-lg">Follow us</h1>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>

      <div className="flex flex-col hidden md:block">
        <h1 className="font-bold text-lg">Contact Info</h1>
        <p>contactinfo@gmail.com</p>
        <p>+503 87989898</p>
        <p>1234 street name, city, country</p>
      </div>

      <div className="flex flex-col hidden md:block">
        <h1 className="font-bold text-lg">Navigation</h1>
        <p>Home</p>
        <p>Services</p>
        <p>About us</p>
      </div>
    </footer>
  );
};

export default Footer;

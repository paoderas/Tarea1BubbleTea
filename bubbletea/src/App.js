import React from 'react';
import Header from './Components/Header';
import ContactSection from './Components/ContactSection';
import MainSection from './Components/MainSection';
import ServicesSection from './Components/ServicesSection';
import AboutUs from './Components/AboutUs';
import SectionUno from './Components/SectionUno';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainSection/>
      <ServicesSection/>
      <AboutUs/>
      <SectionUno/>
      <ContactSection/>
      <Footer/>
      
    </div>
  );
}

export default App;


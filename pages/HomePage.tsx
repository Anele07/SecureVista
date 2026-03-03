import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AiChat from '../components/AiChat';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-300">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
      <AiChat />
    </div>
  );
};

export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-restaurant-brown via-restaurant-burgundy to-restaurant-brown">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Placeholder for biryani steam video */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1563379091339-03246963d17f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-restaurant-gold">
          Hyderabad Cafe
        </h1>
        <p className="text-2xl md:text-3xl mb-4 animate-fade-in delay-200 font-medium">
          Waterloo
        </p>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 delay-300">
          Where Heritage Meets Flavor in Every Bite
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Link
            to="/menu"
            className="bg-restaurant-gold hover:bg-restaurant-light-gold text-restaurant-brown px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </Link>
          <Link
            to="/menu"
            className="border-2 border-restaurant-gold text-restaurant-gold hover:bg-restaurant-gold hover:text-restaurant-brown px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Menu
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-restaurant-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-restaurant-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

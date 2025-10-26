import React from 'react';
// Import the icon
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center py-24 md:py-32">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          HeyDigitals
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        We Design. We Develop. We Grow Your Digital Presence.
      </p>

      {/* CTA Button */}
      <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
        <span>Book a Service</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Hero;
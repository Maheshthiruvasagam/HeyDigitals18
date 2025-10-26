import React from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              HeyDigitals
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At HeyDigitals, we believe in the power of digital transformation. Our mission is to help businesses and individuals establish a strong online presence through innovative design, cutting-edge development, and strategic digital marketing.
          </p>
          <p className="text-lg text-gray-600">
            We are a team of passionate professionals dedicated to bringing your digital vision to life. From stunning websites to comprehensive marketing strategies, we deliver solutions that drive real results.
          </p>
        </div>

        {/* Team Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          
          {/* Team Member Card 1 - Now a clickable link */}
          <a
            href="https://saravanaofficialpmv.github.io/mainportfolio1/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm h-full">
              <div className="flex justify-center mb-4">
                {/* Icon Background */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                  <FaUser className="text-4xl text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Saravana Perumal
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  Founder
                </p>
                <p className="text-gray-600">
                  Visionary entrepreneur with a passion for digital innovation and creative excellence. Leading HeyDigitals with a focus on delivering exceptional value to every client.
                </p>
              </div>
            </div>
          </a>

          {/* Team Member Card 2 - Now a clickable link */}
          <a
            href="https://mahesh-web-craft.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm h-full">
              <div className="flex justify-center mb-4">
                {/* Icon Background */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                  <FaUser className="text-4xl text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Mahesh
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  Co-founder & CEO
                </p>
                <p className="text-gray-600">
                  Strategic leader driving business growth and operational excellence. Committed to fostering innovation and ensuring client success through every project.
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;

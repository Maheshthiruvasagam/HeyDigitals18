import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to HeyDigitals</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your partner in digital success. We provide professional web development,
          digital marketing, and creative services.
        </p>
        <div className="space-x-4">
          <Link 
            to="/services" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Our Services
          </Link>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
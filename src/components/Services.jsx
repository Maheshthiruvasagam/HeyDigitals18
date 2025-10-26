import React from 'react';
import { Link } from 'react-router-dom';
// Import the icons you'll need
import { FaCode, FaBullhorn, FaAddressCard, FaEdit } from 'react-icons/fa';

// Array of service data to make it easy to manage
const services = [
  {
    icon: <FaCode className="text-4xl text-blue-600" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    icon: <FaBullhorn className="text-4xl text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence, drive traffic, and convert visitors into customers.',
  },
  {
    icon: <FaAddressCard className="text-4xl text-blue-600" />,
    title: 'Portfolio Design',
    description: 'Stunning portfolio websites that showcase your work professionally and help you stand out from the competition.',
  },
  {
    icon: <FaEdit className="text-4xl text-blue-600" />,
    title: 'Editing',
    description: 'Professional photo and video editing services to make your content shine and engage your audience effectively.',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex justify-center md:justify-start mb-4">
                {/* Icon Background */}
                <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                  {service.icon}
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Service Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
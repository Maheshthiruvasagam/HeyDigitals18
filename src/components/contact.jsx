import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import icons for the contact details
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // State for the new, simpler form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Column 1: Send us a Message (Form) */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form
              action="https://formspree.io/f/meopqbbo" // Your email here
              method="POST"
              className="space-y-6"
            >
              {/* Hidden fields for subject and redirect */}
              <input 
                type="hidden" 
                name="_subject" 
                value="New Message from HeyDigitals 'Get in Touch'!" 
              />
              <input 
                type="hidden" 
                name="_next" 
                value={`${window.location.origin}/thank-you`} 
              />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Connect with Us & Ready to Start */}
          <div className="space-y-8">
            
            {/* Connect with Us Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect with Us</h2>
              <div className="space-y-4">
                {/* Email */}
                <a href="mailto:heydigitals.care@gmail.com" className="flex items-center space-x-3 group">
                  <FaEnvelope className="text-2xl text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">heydigitals@gmail.com</span>
                </a>
                {/* Socials */}
                <div className="flex space-x-6 pt-2">
                  <a href="https://www.instagram.com/heydigitals.agency?igsh=dGJldnBvaDhybWx0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 transition-colors">
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://www.linkedin.com/company/hey-digitals/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* Ready to start your project? Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your project?</h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help grow your digital presence.
              </p>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
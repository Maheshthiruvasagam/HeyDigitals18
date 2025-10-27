import React from 'react';
import { Link } from 'react-router-dom';

// 1. Import all the icons we need from react-icons
import { 
  FaArrowRight, 
  FaProjectDiagram, 
  FaUsers, 
  FaAward, 
  FaSearch, 
  FaPalette, 
  FaRocket, 
  FaQuoteLeft,
  FaUser,
  FaCode,
  FaBullhorn,
  FaAddressCard
} from 'react-icons/fa';

// 2. Import React icon from 'fa6'
import { FaReact } from 'react-icons/fa6';
// 3. Import *correct* Tailwind icon from 'si' (Simple Icons)
import { SiTailwindcss } from 'react-icons/si';


/**
 * This component is now the entire multi-section Home Page.
 */
const Home = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-white">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center py-24 md:py-32 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              HeyDigitals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            We Design. We Develop. We Grow Your Digital Presence.
          </p>
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Book a Service</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <FaProjectDiagram className="text-4xl text-blue-600 mx-auto mb-3" />
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                20+
              </p>
              <p className="text-lg text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div>
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-3" />
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                15+
              </p>
              <p className="text-lg text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div>
              <FaAward className="text-4xl text-blue-600 mx-auto mb-3" />
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                3+
              </p>
              <p className="text-lg text-gray-600 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our Simple <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We follow a proven 3-step process to ensure your project's success from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaSearch className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Discovery & Strategy</h3>
              <p className="text-gray-600">
                We start by understanding your goals, audience, and vision to build a comprehensive project roadmap.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaPalette className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Design & Development</h3>
              <p className="text-gray-600">
                Our team designs a stunning UI and develops a robust, scalable website or application.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaRocket className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Launch & Grow</h3>
              <p className="text-gray-600">
                We deploy your project and provide ongoing support and marketing to help you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We offer a complete suite of digital solutions to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Service 1: Web Development */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <FaCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Custom, high-performance websites built with modern technologies like React.
              </p>
              <Link to="/services" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Service 2: Digital Marketing */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <FaBullhorn className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Data-driven SEO and marketing campaigns to find and engage your target audience.
              </p>
              <Link to="/services" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Service 3: Portfolio Design */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <FaAddressCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Design</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Stunning, professional portfolios that showcase your unique skills and work.
              </p>
              <Link to="/services" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tech Stack */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Our Technology Stack
          </h3>
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="flex flex-col items-center">
              <FaReact className="w-12 h-12 text-gray-700" />
              <p className="mt-2 text-sm text-gray-600">React</p>
            </div>
            <div className="flex flex-col items-center">
              {/* 4. Use the correct icon component */}
              <SiTailwindcss className="w-12 h-12 text-gray-700" />
              <p className="mt-2 text-sm text-gray-600">Tailwind CSS</p>
            </div>
            {/* You can add more icons here as needed */}
          </div>
        </div>
      </section>


      {/* Section 6: Testimonials (Client Reviews) */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              What Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients think about our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600 italic text-lg mb-6">
                "Working with HeyDigitals was a game-changer. They built us a website that not only looks amazing but also converted 30% more visitors into customers. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mr-4">
                  <FaUser className="text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Chen</h4>
                  <p className="text-sm text-gray-600">CEO, TechStartup</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600 italic text-lg mb-6">
                "The portfolio design was exactly what I wanted. It's sleek, professional, and truly represents my brand. The team was responsive and delivered on time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mr-4">
                  <FaUser className="text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                  <p className="text-sm text-gray-600">Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Final Call to Action (CTA) */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Project?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Let's work together to build something amazing. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
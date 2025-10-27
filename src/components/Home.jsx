import React from 'react';
import { Link } from 'react-router-dom';

// --- INLINE ICONS ---

// Standard Icons
const FaArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
);
const FaProjectDiagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-4xl text-blue-600 mx-auto mb-3">
    <path d="M320 32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM160 32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H160zM128 288c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H128zM352 288c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H352zM544 288c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H544zM32 288c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H32z"/>
  </svg>
);
const FaUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-4xl text-blue-600 mx-auto mb-3">
    <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 464c0 26.5 21.5 48 48 48h208c26.5 0 48-21.5 48-48V384H0v80zm384 0c0 26.5 21.5 48 48 48h208c26.5 0 48-21.5 48-48V384H384v80zM320 288c-61.9 0-112-50.1-112-112S258.1 64 320 64s112 50.1 112 112-50.1 112-112 112z"/>
  </svg>
);
const FaAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600 mx-auto mb-3">
    <path d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32V64H32C14.3 64 0 78.3 0 96v32c0 17.7 14.3 32 32 32H96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V160h32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H320V32zM0 288v160c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V288H0zM192 384c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm128 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
  </svg>
);
const FaSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z"/>
  </svg>
);
const FaPalette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39 224h434c14.8 0 27.4-10.7 29.8-25.2l20-120c2.1-12.8-5.3-25.2-18.1-27.3s-25.2 5.3-27.3 18.1l-20 120c-.3 1.8-1.8 3.2-3.6 3.2H39c-1.8 0-3.4-1.4-3.6-3.2l-20-120C13.3 54.3 3.4 46.9-5.7 49s-20.2 14.5-18.1 27.3l20 120C-1.5 213.3 11.2 224 26 224H39zM0 320v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V320H0zM192 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm64 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0z"/>
  </svg>
);
const FaRocket = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.1-21.3-6.9-32.5l34.4-94.3c2.4-6.6 8.8-11.1 15.9-11.1h48.3c7.1 0 13.5 4.5 15.9 11.1l34.4 94.3c4.2 11.2 1.7 24-6.9 32.5l-30.9 30.9c-8.5 8.5-21.3 11.1-32.5 6.9l-94.3-34.4c-6.6-2.4-11.1-8.8-11.1-15.9V280.4c0-7.1 4.5-13.5 11.1-15.9l94.3-34.4c11.2-4.2 24 1.7 32.5 6.9l30.9 30.9c8.5 8.5 11.1 21.3 6.9 32.5l-34.4 94.3c-2.4 6.6-8.8 11.1-15.9 11.1H192c-7.1 0-13.5-4.5-15.9-11.1l-5.7-15.6c-.6-1.5-1.5-2.8-2.6-4L156.6 384.9zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
  </svg>
);
const FaQuoteLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-blue-500 text-3xl mb-4">
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/>
  </svg>
);
const FaUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-gray-500">
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);

// Service Icons
const FaCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-8 h-8 text-blue-600">
    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zM256 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM0 128C0 92.7 28.7 64 64 64s64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm32 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-35.3 28.7-64 64-64s64 28.7 64 64zM480 128c0-35.3 28.7-64 64-64s64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm32 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM640 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-35.3 28.7-64 64-64s64 28.7 64 64z"/>
  </svg>
);
const FaBullhorn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8 text-blue-600">
    <path d="M512 32c0 11.5-3.8 22.5-10.7 31.6l-112 144C381.1 218.8 372.4 224 362.7 224H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h26.7c8.5 0 16.6-4.9 20.6-12.8l112-144C507.7 89 512 79.1 512 68.8V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h64V448c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V160h16c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16v32c0 8.8-7.2 16-16 16H304.4c-8.5 0-16.6 4.9-20.6 12.8L216 336h-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16c8.5 0 16.6-4.9 20.6-12.8L288 336h16c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H288V144h192V64c0-17.7 14.3-32 32-32z"/>
  </svg>
);
const FaAddressCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8 text-blue-600">
    <path d="M0 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM448 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 320c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320zM288 320c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320zM416 320c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320z"/>
  </svg>
);

// Tech Stack Icons
const FaReact = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12 text-gray-700">
    <path d="M418.3 177.2c-5.4-1.8-10.8-3.8-16.2-5.9.8-3.6.4-7.4-1.2-10.8-11.5-24.3-38-34.1-62.4-22.6-24.3 11.5-34.1 38-22.6 62.4 9.1 19.2 29.2 29.5 48.3 25.1-6.4 3.6-12.7 7.6-18.8 11.8l-15.6-32.5c-1.8-3.8-5.3-6.4-9.3-6.9s-7.9 1.1-10.7 4.3l-22.6 25.1c-1.9 2.1-3.6 4.4-5.2 6.8-14-3.5-28.5-6.2-43.3-8.1-1.3-8.9-3.4-17.8-6.4-26.4-11.5-32.5-44.4-46.7-76.9-35.1S2.5 167.3 14 200c11.5 32.5 44.4 46.7 76.9 35.1 12.8-4.5 24.1-11.9 33.2-21.2 1.3 2.1 2.7 4.2 4.1 6.2l20.1 27.9c1.9 2.6 4.8 4.3 8 4.9 3.2.6 6.3-.5 8.8-2.6l20.8-17.6c1.1-1 2.1-2 3.1-3.2 26.1 11.5 54.4 19.6 84.3 24.2 1.8 12.3 5.1 24.4 9.8 35.8 11.5 28.3 40.5 42.6 68.8 31.1 28.3-11.5 42.6-40.5 31.1-68.8-6.1-15-17.2-27-31.1-33.8 1.6-1.5 3-3 4.5-4.6l27.1-29.8c2.4-2.6 3.6-5.9 3.6-9.2s-1.2-6.6-3.6-9.2l-34.9-38.3c-1.9-2.1-4.3-3.6-7-4.5-2.6-.9-5.4-.9-8-.1zM111.9 198.8c-18.6-6.6-30.2-26.1-23.6-44.7s26.1-30.2 44.7-23.6 30.2 26.1 23.6 44.7-26.1 30.2-44.7 23.6zm226.2 216.7c-21.2 8.1-45-2.7-53.1-23.9s2.7-45 23.9-53.1 45 2.7 53.1 23.9-2.7 45-23.9 53.1zm68.8-103.5c-18.6 6.6-39.1-5-45.7-23.6s5-39.1 23.6-45.7 39.1 5 45.7 23.6-5 39.1-23.6 45.7z"/>
  </svg>
);
const FaTailwind = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12 text-gray-700">
    <path d="M256 32c-6.6 0-12.7 2.7-17.1 7.4l-128 139c-3.6 3.9-5.7 8.9-5.8 14.1s2 10.1 5.6 13.9l128 139c4.4 4.7 10.5 7.4 17.1 7.4s12.7-2.7 17.1-7.4l128-139c3.6-3.9 5.7-8.9 5.8-14.1s-2-10.1-5.6-13.9l-128-139C268.7 34.7 262.6 32 256 32zM151.7 192h78.8l-52.5 57.3c-4.4 4.7-6.6 10.7-6.6 16.7s2.2 12 6.6 16.7l52.5 57.3h-78.8c-10.3 0-19.6-6.4-23.2-16l-33.8-90.7c-1.3-3.3-1.3-6.9 0-10.3l33.8-90.7c3.7-9.6 12.9-16 23.2-16zM360.3 192h-78.8l52.5 57.3c4.4 4.7 6.6 10.7 6.6 16.7s-2.2 12-6.6 16.7l-52.5 57.3h78.8c10.3 0 19.6-6.4 23.2-16l33.8-90.7c1.3-3.3 1.3-6.9 0-10.3l-33.8-90.7c-3.7-9.6-12.9-16-23.2-16z"/>
  </svg>
);


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
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <FaProjectDiagram />
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                20+
              </p>
              <p className="text-lg text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div>
              <FaUsers />
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                15+
              </p>
              <p className="text-lg text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div>
              <FaAward />
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
                <FaSearch />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Discovery & Strategy</h3>
              <p className="text-gray-600">
                We start by understanding your goals, audience, and vision to build a comprehensive project roadmap.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Design & Development</h3>
              <p className="text-gray-600">
                Our team designs a stunning UI and develops a robust, scalable website or application.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Launch & Grow</h3>
              <p className="text-gray-600">
                We deploy your project and provide ongoing support and marketing to help you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION 1: Featured Services --- */}
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
                <FaCode />
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
                <FaBullhorn />
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
                <FaAddressCard />
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

      {/* --- NEW SECTION 2: Tech Stack --- */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Our Technology Stack
          </h3>
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="flex flex-col items-center">
              <FaReact />
              <p className="mt-2 text-sm text-gray-600">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTailwind />
              <p className="mt-2 text-sm text-gray-600">Tailwind CSS</p>
            </div>
            {/* You can add more icons here as needed */}
          </div>
        </div>
      </section>


      {/* Section 4: Testimonials (Client Reviews) */}
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
              <FaQuoteLeft />
              <p className="text-gray-600 italic text-lg mb-6">
                "Working with HeyDigitals was a game-changer. They built us a website that not only looks amazing but also converted 30% more visitors into customers. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mr-4">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Chen</h4>
                  <p className="text-sm text-gray-600">CEO, TechStartup</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <FaQuoteLeft />
              <p className="text-gray-600 italic text-lg mb-6">
                "The portfolio design was exactly what I wanted. It's sleek, professional, and truly represents my brand. The team was responsive and delivered on time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mr-4">
                  <FaUser />
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

      {/* Section 5: Final Call to Action (CTA) */}
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
import React from 'react';
import { Link } from 'react-router-dom';

// --- INLINE ICONS ---

// SVG Icon for User
const FaUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);

// SVG Icon for Innovation (Lightbulb)
const FaLightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64h64V32zM192 128c-53 0-96 43-96 96c0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.7 14.3-32 32-32s32 14.3 32 32c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96zM352 224c0-17.7-14.3-32-32-32c-17.7 0-32 14.3-32 32v32h-2c-13.3 0-24 10.7-24 24c0 4.4-1.2 8.6-3.2 12.3c-1.8 3.4-3.9 6.5-6.3 9.3l-29.6 34.8c-26.2 30.8-38.9 70.2-38.9 110.6V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V448h32v32c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V442.9c0-40.4-12.7-79.8-38.9-110.6l-29.6-34.8c-2.4-2.8-4.5-5.9-6.3-9.3c-2-3.7-3.2-7.9-3.2-12.3c0-13.3-10.7-24-24-24h-2V224z"/>
  </svg>
);

// SVG Icon for Handshake (Partnership)
const FaHandshake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M480 32C568.4 32 640 103.6 640 192s-71.6 160-160 160c-15.1 0-29.7-2.1-43.8-6.1l-61.9 61.9c-14.3 14.3-33.6 22.1-53.9 22.1H304c-53 0-96-43-96-96c0-20.4 6.3-39.6 17.4-55.8L120.8 172.1C106.7 176.1 92 178.3 77.2 178.3C34.5 178.3 0 143.8 0 101.2C0 58.5 34.5 24 77.2 24c25.4 0 48.7 12.7 63.1 32.5l68.6 86c3.4-3.7 7-7.2 10.7-10.4l33-33.1c29-29 68-45 109-45c26.1 0 51.2 6.7 73.2 18.5zM192 128a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM448 192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z"/>
  </svg>
);

// SVG Icon for Quality (Medal)
const FaMedal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l21.6 36.4C345.4 121.7 384 160.6 384 208v16c0 8.8-7.2 16-16 16h-48v16c0 53-43 96-96 96s-96-43-96-96v-16H80c-8.8 0-16-7.2-16-16v-16c0-47.4 38.6-86.3 71.9-119.8l21.6-36.4C228.7 39.5 241.8 32 256 32zM0 416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352H0v64z"/>
  </svg>
);

// SVG Icon for Client-Centric (Users)
const FaUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 464c0 26.5 21.5 48 48 48h208c26.5 0 48-21.5 48-48V384H0v80zm384 0c0 26.5 21.5 48 48 48h208c26.5 0 48-21.5 48-48V384H384v80zM320 288c-61.9 0-112-50.1-112-112S258.1 64 320 64s112 50.1 112 112-50.1 112-112 112z"/>
  </svg>
);

// SVG Icon for Agile (Sync)
const FaSyncAlt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M440.65 12.57l4 40.7c1.48 15.05-10.12 28-25.17 29.47l-40.7 4c-15.05 1.48-28-10.12-29.47-25.17l-4-40.7c-1.48-15.05 10.12-28 25.17-29.47l40.7-4c15.05-1.48 28 10.12 29.47 25.17zM103.52 380.05l-40.7-4c-15.05-1.48-28 10.12-29.47 25.17l-4 40.7c-1.48 15.05 10.12 28 25.17 29.47l40.7 4c15.05 1.48 28-10.12 29.47-25.17l4-40.7c1.48-15.05-10.12-28-25.17-29.47zM499.43 230.18c-1.48-15.05-14.43-26.65-29.47-25.17l-40.7 4c-15.05 1.48-26.65 14.43-25.17 29.47l4 40.7c1.48 15.05 14.43 26.65 29.47 25.17l40.7-4c15.05-1.48 26.65-14.43 25.17-29.47l-4-40.7zM68.74 117.9l-40.7 4c-15.05 1.48-26.65 14.43-25.17 29.47l4 40.7c1.48 15.05 14.43 26.65 29.47 25.17l40.7-4c15.05-1.48 26.65-14.43 25.17-29.47l-4-40.7c-1.48-15.05-14.43-26.65-29.47-25.17z"/>
  </svg>
);

// SVG Icon for Data-Driven (Chart Line)
const FaChartLine = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M496 384H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM64 320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80 96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80-160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM80 64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm128 0h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm128 0h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm128 0h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"/>
  </svg>
);


const About = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Section 1: Header */}
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

        {/* Section 2: Team Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          
          {/* Team Member Card 1 (Clickable) */}
          <a
            href="https://saravanaofficialpmv.github.io/mainportfolio1/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                <FaUser />
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
          </a>

          {/* Team Member Card 2 (Clickable) */}
          <a
            href="https://mahesh-web-craft.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                <FaUser />
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
          </a>
        </div>

        {/* --- NEW SECTION --- */}
        {/* Section 3: Our Unique Approach */}
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our Unique <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We don't just build; we create strategies and partnerships designed for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Approach 1 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Centric</h3>
              <p className="text-gray-600">
                Your vision is our blueprint. We listen, adapt, and collaborate closely with you at every single stage of the project.
              </p>
            </div>
            {/* Approach 2 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaSyncAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agile & Transparent</h3>
              <p className="text-gray-600">
                We work in flexible sprints with clear, constant communication, so you always know the status of your project.
              </p>
            </div>
            {/* Approach 3 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Results</h3>
              <p className="text-gray-600">
                Our solutions are rooted in data. We track performance and optimize our strategies to ensure we drive real, measurable results.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 4: Our Core Values (This was Section 3 before) */}
        <div className="pb-16 md:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our principles guide every decision we make and every line of code we write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and creative ideas to deliver cutting-edge solutions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term relationships, acting as a true partner, not just a vendor.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaMedal />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                From pixel-perfect designs to bug-free code, we are committed to the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 5: Final Call to Action (CTA) */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let's Build Your Vision
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
            Ready to start your digital journey? We're here to help you every step of the way, from concept to launch.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;



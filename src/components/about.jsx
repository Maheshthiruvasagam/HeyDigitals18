import React from 'react';
import { Link } from 'react-router-dom';

// 1. Import icons from react-icons/fa (for user)
import { FaUser } from 'react-icons/fa';

// 2. Import *new* modern icons from react-icons/hi (Heroicons)
import { 
  HiOutlineUserGroup, 
  HiOutlineChatAlt2, 
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineBadgeCheck
} from 'react-icons/hi';


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

        {/* Section 2: Team Section Grid (This section is fine) */}
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
          </a>
        </div>
        
        {/* Section 3: Our Unique Approach (Icons Updated) */}
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Unique Approach
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We're more than just a digital agency. We're your creative partners, invested in your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Approach 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <HiOutlineUserGroup className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Centric</h3>
              <p className="text-gray-600">
                Your vision is our blueprint. We listen, adapt, and collaborate closely with you at every single stage of the project.
              </p>
            </div>
            {/* Approach 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <HiOutlineChatAlt2 className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agile & Transparent</h3>
              <p className="text-gray-600">
                We work in flexible sprints with clear, constant communication, so you always know the status of your project.
              </p>
            </div>
            {/* Approach 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                <HiOutlineChartBar className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Results</h3>
              <p className="text-gray-600">
                Our solutions are rooted in data. We track performance and optimize our strategies to ensure we drive real, measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Our Core Values (Icons Updated) */}
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
                <HiOutlineLightBulb className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and creative ideas to deliver cutting-edge solutions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <HiOutlineUsers className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term relationships, acting as a true partner, not just a vendor.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <HiOutlineBadgeCheck className="text-4xl text-blue-600" />
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


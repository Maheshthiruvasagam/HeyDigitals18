import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaBullhorn, 
  FaAddressCard, 
  FaEdit, 
  FaShieldAlt, 
  FaClock, 
  FaRegSmile, // Using FaRegSmile for a better "outline" look
  FaCheck 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-600" />,
    title: 'Web Development',
    description: 'We build fast, responsive, and secure websites tailored to your brand. From simple portfolios to complex e-commerce solutions, our team uses modern technologies like React, Next.js, and Tailwind CSS to ensure your site is a cut above the rest.',
    includes: [
      'Custom Responsive Design',
      'React / Next.js Development',
      'E-commerce Integration',
      'CMS (Content Management)',
      'SEO Optimization',
    ],
  },
  {
    icon: <FaBullhorn className="text-4xl text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Get seen by the right audience. Our data-driven marketing strategies include SEO, PPC advertising, and social media management to boost your online presence, drive qualified traffic, and convert visitors into loyal customers.',
    includes: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Ads',
      'Social Media Management',
      'Content Marketing',
      'Email Campaigns',
    ],
  },
  {
    icon: <FaAddressCard className="text-4xl text-blue-600" />,
    title: 'Portfolio Design',
    description: 'First impressions matter. We design and build stunning, professional portfolios that showcase your unique skills and work. Stand out from the competition and win that next client or job with a portfolio that truly represents you.',
    includes: [
      'Unique Personal Branding',
      'Interactive Galleries',
      'Case Study Layouts',
      'Mobile-First Design',
      'Contact Form Integration',
    ],
  },
  {
    icon: <FaEdit className="text-4xl text-blue-600" />,
    title: 'Editing',
    description: 'Engage your audience with polished, professional content. Our photo and video editing services will make your content shine. We handle everything from color grading and audio mixing to dynamic cuts and visual effects.',
    includes: [
      'Video Editing & Post-Production',
      'Photo Retouching',
      'Color Grading',
      'Motion Graphics (Basic)',
      'Audio Enhancement',
    ],
  },
];

const faqItems = [
  {
    question: 'How long does a typical website project take?',
    answer: 'A standard website typically takes 4-6 weeks from start to launch. This includes discovery, design, development, and revision rounds. More complex projects, like e-commerce sites, may take longer.',
  },
  {
    question: 'Do you provide website hosting or domain names?',
    answer: 'We do not directly provide hosting, but we will deploy your website to a modern, high-performance platform like Vercel or Netlify. We can guide you on the best place to purchase your domain name, such as GoDaddy or Namecheap.',
  },
  {
    question: 'What is your process for working with clients?',
    answer: 'We follow a simple 3-step process: 1. Discovery & Strategy, 2. Design & Development, and 3. Launch & Grow. We maintain clear and constant communication throughout the entire project.',
  },
  {
    question: 'Do I get support after my website is launched?',
    answer: 'Yes! All our service packages include 30 days of complimentary support after launch to fix any potential bugs or answer any questions you may have about your new site.',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Section 1: Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive digital solutions tailored to your needs. We provide everything you need to build, launch, and grow your digital presence.
          </p>
        </div>

        {/* Section 2: Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md h-full flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                  {service.icon}
                </div>
              </div>
              <div className="text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                
                {/* "INCLUDES" LIST */}
                <div className="text-left mt-6">
                  <h4 className="font-semibold text-gray-700 mb-3 text-center">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <FaCheck className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section 3: Our Guarantee */}
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Service Guarantee
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Your success is our priority. We stand by our work with these promises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Guarantee 1 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaClock className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your deadlines. Our process is optimized for efficiency, ensuring your project is launched on schedule.
              </p>
            </div>
            {/* Guarantee 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaRegSmile className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We're not happy until you are. We include revision rounds to make sure the final product is exactly what you envisioned.
              </p>
            </div>
            {/* Guarantee 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaShieldAlt className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Support</h3>
              <p className="text-gray-600">
                Once your project is live, we provide 30 days of complimentary support to fix any bugs or answer any questions.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="pb-16 md:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border border-gray-200 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <span className="relative w-5 h-5 flex-shrink-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>


        {/* Section 5: Call to Action Button */}
        <div className="text-center mt-8">
          <Link
            to="/pricing"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;


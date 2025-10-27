import React from 'react';
import { Link } from 'react-router-dom';

// --- INLINE ICONS ---

// SVG Icon for Code
const FaCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zM256 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM0 128C0 92.7 28.7 64 64 64s64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm32 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-35.3 28.7-64 64-64s64 28.7 64 64zM480 128c0-35.3 28.7-64 64-64s64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm32 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM640 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-35.3 28.7-64 64-64s64 28.7 64 64z"/>
  </svg>
);

// SVG Icon for Bullhorn (Marketing)
const FaBullhorn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M512 32c0 11.5-3.8 22.5-10.7 31.6l-112 144C381.1 218.8 372.4 224 362.7 224H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h26.7c8.5 0 16.6-4.9 20.6-12.8l112-144C507.7 89 512 79.1 512 68.8V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h64V448c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V160h16c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16v32c0 8.8-7.2 16-16 16H304.4c-8.5 0-16.6 4.9-20.6 12.8L216 336h-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16c8.5 0 16.6-4.9 20.6-12.8L288 336h16c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H288V144h192V64c0-17.7 14.3-32 32-32z"/>
  </svg>
);

// SVG Icon for Address Card (Portfolio)
const FaAddressCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M0 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM448 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 320c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320zM288 320c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320zM416 320c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V320z"/>
  </svg>
);

// SVG Icon for Edit
const FaEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-45.2-45.2c-5.8-5.8-15.1-5.8-20.9 0L419.3 94.3l90.2 90.2L585.3 104c5.8-5.8 5.8-15.1 0-20.9zM0 160c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160z"/>
  </svg>
);

// SVG Icon for Shield
const FaShieldAlt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-41 0l-192 80C27.7 91.1 16 108.3 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 37 0C381.5 463.7 496 326.5 496 128c0-19.7-11.7-36.9-29.5-44.3zM256 448c-52.9 0-101.4-25.1-136.8-68.8-5.9-7.3-11-15.1-15.2-23.2C60 307.3 32 216.5 32 128c0-1.4 .1-2.8 .3-4.2l192 80v244.2zM480 128c0 88.5-28 179.3-71.9 226.8-4.2 8.1-9.3 15.9-15.2 23.2C357.4 422.9 308.9 448 256 448V203.8l192-80c.2 1.4 .3 2.8 .3 4.2z"/>
  </svg>
);

// SVG Icon for Clock
const FaClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208S370.7 464 256 464zM312 256c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-64c0-6.6 5.4-12 12-12s12 5.4 12 12v52h76c6.6 0 12 5.4 12 12v0z"/>
  </svg>
);

// SVG Icon for Smile
const FaSmile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className="text-4xl text-blue-600">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200S358.3 456 248 456zM164.6 295.6c4.7 4.7 12.3 4.7 17 0l48-48c4.7-4.7 4.7-12.3 0-17l-48-48c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17l40 40-40 40c-4.7 4.7-4.7 12.3 0 17zm166.8 0c4.7 4.7 12.3 4.7 17 0l48-48c4.7-4.7 4.7-12.3 0-17l-48-48c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17l40 40-40 40c-4.7 4.7-4.7 12.3 0 17z"/>
  </svg>
);

// SVG Icon for Checkmark
const FaCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
  </svg>
);


const services = [
  {
    icon: <FaCode />,
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
    icon: <FaBullhorn />,
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
    icon: <FaAddressCard />,
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
    icon: <FaEdit />,
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
                
                {/* --- NEW "INCLUDES" LIST --- */}
                <div className="text-left mt-6">
                  <h4 className="font-semibold text-gray-700 mb-3 text-center">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <FaCheck />
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
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your deadlines. Our process is optimized for efficiency, ensuring your project is launched on schedule.
              </p>
            </div>
            {/* Guarantee 2 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaSmile />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We're not happy until you are. We include revision rounds to make sure the final product is exactly what you envisioned.
              </p>
            </div>
            {/* Guarantee 3 */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 mx-auto mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Support</h3>
              <p className="text-gray-600">
                Once your project is live, we provide 30 days of complimentary support to fix any bugs or answer any questions.
              </p>
            </div>
          </div>
        </div>

        {/* --- NEW FAQ SECTION --- */}
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
            Book a Service
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaClock, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

// --- FAQ Data ---
const faqItems = [
  {
    question: 'What is the best way to contact you?',
    answer: 'For general inquiries, feel free to use the contact form or email us directly. For project-specific discussions, we recommend booking a free consultation through our pricing page.',
  },
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond to all inquiries within 24-48 business hours (Mon-Fri). If you contact us on a weekend, we will get back to you on the next business day.',
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer a free consultation to discuss your project, understand your goals, and see if we are a good fit. You can book one from our pricing page or contact us to schedule.',
  },
];


const Contact = () => {
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

        {/* Section 1: Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        {/* Section 2: Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

          {/* Column 1: Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form
              action="https://formsubmit.co/mahi09042006@gmail.com" // Your correct email
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit.co hidden fields */}
              <input 
                type="hidden" 
                name="_subject" 
                value="New Contact Form Submission from HeyDigitals!" 
              />
              <input 
                type="hidden" 
                name="_next" 
                value={`${window.location.origin}/thank-you`} 
              />
              <input type="hidden" name="_captcha" value="false" />

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
                  placeholder="Your full name"
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
                  className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Connect & CTA */}
          <div className="space-y-8">
            {/* Connect with Us */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Us</h3>
              
              {/* Email */}
              <div className="flex items-center space-x-3 mb-4">
                <FaEnvelope className="w-5 h-5 text-gray-500" />
                <a 
                  href="mailto:heydigitals.care@gmail.com" // Corrected email
                  className="text-gray-600 hover:text-blue-600"
                >
                  heydigitals.care@gmail.com
                </a>
              </div>

              {/* Socials */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/heydigitals.agency?igsh=dGJldnBvaDhybWx0" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/hey-digitals/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-700 transition-colors" />
                </a>
              </div>
            </div>

            {/* Ready to start? */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to start your project?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help grow your digital presence.
              </p>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Availability & Location */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Availability */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaClock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Our Availability</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We are available to respond to your inquiries during the following hours.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <strong className="pr-2">Monday - Friday:</strong>
                  <span>9:00 AM - 6:00 PM (IST)</span>
                </li>
                <li className="flex justify-between">
                  <strong className="pr-2">Saturday:</strong>
                  <span>10:00 AM - 5:00 PM (IST)</span>
                </li>
                <li className="flex justify-between">
                  <strong className="pr-2">Sunday:</strong>
                  <span>10:00 AM - 2:00 PM (IST)</span>
                </li>
              </ul>
            </div>
            
            {/* Location (Placeholder) */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Our Location</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We are a remote-first team based in India, serving clients worldwide.
              </p>
              {/* This is a placeholder map image */}
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="https://placehold.co/600x400/e2e8f0/64748b?text=Map+Placeholder" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Map+Error'; e.target.onerror = null; }}
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Section 4: FAQ SECTION */}
        <div className="pb-16 md:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Have More <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Get your answers fast.
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

      </div>
    </div>
  );
};

export default Contact;
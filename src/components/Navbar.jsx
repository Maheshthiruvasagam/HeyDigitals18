import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import icons for the menu
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // State to manage whether the nav is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold z-20" onClick={handleLinkClick}>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            HeyDigitals
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        {/* 'hidden' on mobile, 'flex' on medium screens and up (md:) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-700 hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) */}
        {/* 'flex' on mobile, 'hidden' on medium screens and up (md:) */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu} className="text-gray-700">
            {/* Show 'X' icon if menu is open, or 'Bars' icon if closed */}
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Fullscreen Overlay) */}
        <div
          className={`
            md:hidden fixed inset-0 bg-white z-10 
            flex justify-center items-center 
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'transform-none' : 'transform -translate-y-full'}
          `}
        >
          <nav>
            <ul className="flex flex-col items-center space-y-8">
              <li>
                <Link
                  to="/"
                  className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
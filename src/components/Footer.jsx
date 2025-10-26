import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left text-sm md:text-base text-gray-600 space-y-2 md:space-y-0">
        <p className="flex-shrink-0">© {new Date().getFullYear()} HeyDigitals. All rights reserved.</p>
        <p className="flex flex-col md:flex-row items-center gap-2">
          <span>Founder: Saravana Perumal</span>
          <span className="hidden md:inline mx-2">|</span>
          <span>Co‑founder &amp; CEO: Mahesh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black text-gray-400 py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Logo Section */}
      <div className="text-lg font-semibold flex items-center text-gray-100">
      <img src="src\assets\logo.webp" alt="logo" srcset="" className='h-10 w-10 rounded-md mx-2'/>
        Dtox
      </div>

      {/* Navigation Links */}
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="#" className="hover:text-gray-200 transition">
          Home
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          About
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          Services
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          Contact
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-4 md:mt-0 flex space-x-4">
        <a href="#" className="hover:text-gray-200 transition">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          <Linkedin size={24} />    
        </a>
      </div>
    </div>
    <div className="mt-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Dtox. All rights reserved.
    </div>
  </footer>
);

export default Footer;

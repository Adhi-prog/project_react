import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        
        {/* Contact email */}
        <p className="mb-6 text-gray-400">
          Reach out via email: 
          <a href="mailto:adithyars22cse@srishakthi.ac.in" className="text-yellow-400 hover:text-yellow-500 ml-1">
            adithyars22cse@srishakthi.ac.in
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          © 2024 Adithya RS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

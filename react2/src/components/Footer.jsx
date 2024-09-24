import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Get in Touch</h2>

        <p className="mb-6 text-gray-400">
          Reach out via email:
          <a
            href="mailto:adithyars22cse@srishakthi.ac.in"
            className="text-yellow-400 hover:text-yellow-500 ml-2 transition-colors duration-300"
          >
            adithyars22cse@srishakthi.ac.in
          </a>
        </p>

        <div className="flex justify-center space-x-10 mb-6">
          <a
            href="https://www.linkedin.com/in/adithya-rs-175a44274"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Adhi-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Adithya RS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

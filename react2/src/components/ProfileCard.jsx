import React from 'react';
import AdhiProfileCard from '../assets/img/adhi.jpg';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          src={AdhiProfileCard}
          alt="Profile"
          className="rounded-full mx-auto mb-6 w-32 h-32 border-4 border-indigo-600 object-cover"
        />
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Adithya RS</h2>
        <p className="text-center text-gray-600 mb-6 font-medium">
          Computer Science Engineer | MERN Stack Developer | Web Enthusiast
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/adithya-rs-175a44274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Adhi-prog"
            className="text-gray-800 hover:text-black transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://adhi-prog.github.io"
            className="text-green-500 hover:text-green-700 transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

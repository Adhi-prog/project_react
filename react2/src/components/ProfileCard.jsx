import React from 'react';
import AdhiProfileCard from '../assets/img/adhi.jpg';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500"> 
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto"> 
        <img
          src={AdhiProfileCard}
          alt="Profile"
          className="rounded-full mx-auto mb-6 w-32 h-32"
        />
        <h2 className="text-3xl font-bold text-center mb-4">Adithya RS</h2>
        <p className="text-center text-gray-600 mb-6">
          Computer Science Engineer | MERN Stack Developer | Web Enthusiast
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/adithya-rs-175a44274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/Adhi-prog" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://adhi-prog.github.io" className="text-blue-500 hover:underline">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

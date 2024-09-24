import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap mb-4 space-x-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-800 text-sm font-semibold mr-2 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
      >
        View on GitHub
        <svg
          className="w-5 h-5 inline ml-2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Doctor Appointment App',
      description: 'A full-stack MERN application that allows users to book and manage doctor appointments online.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: 'https://github.com/your-username/doctor-appointment-app',
    },
    {
      title: 'Image-to-Text Converter',
      description: 'A Python-based app that converts images to text using OCR (Pytesseract) and exports the results.',
      techStack: ['Python', 'OCR', 'Tkinter'],
      githubLink: 'https://github.com/Adhi-prog/python-prog.git',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on recently. These showcase my skills in full-stack development,
          especially in MERN stack and Python-based applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

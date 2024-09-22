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
      githubLink: 'https://github.com/your-username/image-to-text-converter',
    },
    
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

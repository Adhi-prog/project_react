import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

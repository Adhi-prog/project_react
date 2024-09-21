import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 font-semibold">{skill.name}</span>
                <span className="text-gray-700">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-full bg-blue-500 rounded"
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

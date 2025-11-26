
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend & Frameworks',
      icon: '⚙️',
      skills: [
        {
          id: 0,
          name: 'C#',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          id: 1,
          name: 'ASP.NET Core',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
        {
          id: 2,
          name: 'MVC',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
        {
          id: 3,
          name: 'Web API',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
      ],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        {
          id: 4,
          name: 'SQL Server',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        {
          id: 5,
          name: 'MongoDB',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
      ],
    },
    {
      category: 'ORM & Libraries',
      icon: '🔗',
      skills: [
        {
          id: 6,
          name: 'Entity Framework',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
      ],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        {
          id: 7,
          name: 'React.js',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          id: 8,
          name: 'JavaScript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          id: 9,
          name: 'HTML',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          id: 10,
          name: 'CSS',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          id: 11,
          name: 'Tailwind CSS',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
      ],
    },
    {
      category: 'Backend Services',
      icon: '🔧',
      skills: [
        {
          id: 12,
          name: 'Node.js',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          id: 13,
          name: 'Express.js',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
        {
          id: 14,
          name: 'Python',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
      ],
    },
    {
      category: 'Tools & Version Control',
      icon: '🛠️',
      skills: [
        {
          id: 15,
          name: 'Git',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized in full-stack development with expertise in modern frameworks and databases
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 hover:from-slate-700 hover:to-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 border border-slate-700 hover:border-cyan-500/50"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    
                    <div className="relative flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-slate-900/50 group-hover:bg-slate-900 transition-all duration-300">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-10 h-10 object-contain group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-lg"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-gray-200 font-semibold text-center text-sm group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <p className="text-gray-300 text-lg">
              🚀 Passionate about building scalable applications and continuously learning emerging technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

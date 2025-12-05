import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Card - Animated */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative group">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl transform rotate-6 transition-all duration-500 group-hover:rotate-3"></div>
              
              {/* Dark Card Base */}
              <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-6 transition-all duration-500 group-hover:-rotate-3 shadow-2xl"></div>
              
              {/* Avatar Container */}
              <div className="relative bg-slate-700 rounded-3xl p-2 flex items-center justify-center h-full overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Avatar Image */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-slate-600 group-hover:border-cyan-400/30 transition-all duration-300">
                  <img
                    src="https://hareesh.web.app/static/media/profile-img.12d0d0d9.png"
                    alt="Mohamed Umar Farook"
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                  DEV
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-cyan-400 font-semibold">Mohamed Umar Farook</span>, a .NET Developer with 3 years of experience specializing in ASP.NET Core, C#, MVC, Web API, SQL Server, and application support within enterprise environments. I design and enhance backend systems and help keep mission-critical applications stable and performant.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My experience includes API integration, SQL optimization, debugging, backend troubleshooting, and improving system performance. I enjoy solving real-world technical problems, delivering stable solutions, and working closely with cross-functional teams to ship reliable software.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm currently expanding my skills in .NET Core 6+, Web API development, Entity Framework, Azure Cloud, and modern front-end technologies to grow as a full-stack .NET professional. I'm always open to connecting with developers, tech leaders, and recruiters for opportunities in .NET Development, Application Support, or Full Stack Development.
            </p>

            {/* Skills Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4"
            >
              {["C#","ASP.NET Core","MVC", "Web API", "SQL Server", "Entity Framework", "API Integration"].map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-slate-700/80 hover:bg-slate-600 text-cyan-400 rounded-full text-sm font-medium transition-all duration-300 cursor-default shadow-sm hover:shadow-cyan-400/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
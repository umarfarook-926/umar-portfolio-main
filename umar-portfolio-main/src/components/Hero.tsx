import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohamed Umar Farook
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a .NET Developer with 2.5 years of experience specializing in
            ASP.NET Core, C#, Web API, and SQL Server. I build and support
            enterprise applications, solve production issues, and deliver
            reliable backend solutions that improve system performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
            </button>

            <a
              href="https://drive.google.com/file/d/1GfakwR_vyzAG86CatIF8rdsXT5TK9FfV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              download="UmarFarook_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

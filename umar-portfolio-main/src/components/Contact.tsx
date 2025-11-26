import React from "react";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/umarfarook-926/",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamed-umar-farook-a-3516042b7/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mufumar926@gmail.com"
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-slate-800 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700`}
                aria-label={social.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-gray-400">
            © 2024 Mohamed Umar Farook. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

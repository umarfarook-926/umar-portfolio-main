
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    projectId: number;
    category: string;
    title: string;
    projectUrl: string;
    imageUrl: string;
    description: string;
  };
  getCategoryColor: (category: string) => string;
}

const ProjectCard = ({ project, getCategoryColor }: ProjectCardProps) => {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className={`absolute top-4 left-4 px-3 py-1 ${getCategoryColor(project.category)} text-white text-xs font-semibold rounded-full`}>
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
        
        <div className="flex gap-3">
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-sm"
          >
            Live Demo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

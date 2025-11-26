
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';
import ProjectsHeader from './ProjectsHeader';

const Projects = () => {
  const projectsList = [
    {
      projectId: 1,
      category: 'STATIC',
      title: 'Netflix Clone',
      projectUrl: 'https://mynetflixstatic.ccbp.tech',
      imageUrl:
        'https://w7.pngwing.com/pngs/512/67/png-transparent-netflix-television-streaming-media-deezer-spotify-netflix-computer-computer-monitor-accessory-media-thumbnail.png',
      description:
        'A simple Netflix clone with a static homepage showcasing popular movies.',
    },
    {
      projectId: 2,
      category: 'STATIC',
      title: 'Tourism Website',
      projectUrl: 'https://mdumarstatic.ccbp.tech',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
      description:
        'A tourism website that enables users to browse images of popular destinations.',
    },
    {
      projectId: 3,
      category: 'DYNAMIC',
      title: 'Jobby App',
      projectUrl: 'https://umarjobbyapp.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png',
      description:
        'A job search platform that allows users to browse and apply for jobs.',
    },
    {
      projectId: 4,
      category: 'DYNAMIC',
      title: 'Prime Video',
      projectUrl: 'https://umarprimevideo.ccbp.tech/',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
      description:
        'A React app that displays a collection of movies categorized as Action & Comedy.',
    },
    {
      projectId: 5,
      category: 'DYNAMIC',
      title: 'CoWIN Dashboard',
      projectUrl: 'https://umarcowindashbd.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-output.gif',
      description:
        'A dashboard that provides real-time COVID-19 vaccination data.',
    },
    {
      projectId: 6,
      category: 'DYNAMIC',
      title: 'Nxt Trendz',
      projectUrl: 'https://umarspecificpro.ccbp.tech',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
      description:
        'An e-commerce platform that allows users to browse and purchase products.',
    },
    {
      projectId: 7,
      category: 'DYNAMIC',
      title: 'IPL Dashboard App',
      projectUrl: 'https://umaripl2020app.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif',
      description:
        'An IPL dashboard that displays team performance and match details.',
    },
    {
      projectId: 8,
      category: 'DYNAMIC',
      title: 'App Store',
      projectUrl: 'https://umarappstore.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif',
      description: 'A mobile application store with category-based app search.',
    },
    {
      projectId: 9,
      category: 'DYNAMIC',
      title: 'Digital Timer App',
      projectUrl: 'https://umartimerapp.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif',
      description: 'A digital timer app that helps users track time efficiently.',
    },
    {
      projectId: 10,
      category: 'GAME',
      title: 'Match Game',
      projectUrl: 'https://umarmatchgame.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/match-game-lg-output.png',
      description:
        'A memory-based game where users match images in a limited time.',
    },
    {
      projectId: 11,
      category: 'GAME',
      title: 'Emoji Game',
      projectUrl: 'https://umaremojigame.ccbp.tech/',
      imageUrl:
        'https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif',
      description:
        'A fun emoji-matching game where players select unique emojis.',
    },
    {
      projectId: 12,
      category: 'RESPONSIVE',
      title: 'Todo Application',
      projectUrl: 'https://mohamedumartodo.ccbp.tech',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
      description:
        'A Todo app that allows users to add, edit, and persist tasks over reloads.',
    },
    {
      projectId: 13,
      category: 'RESPONSIVE',
      title: 'Wikipedia Search App',
      projectUrl: 'https://umarwikisearch.ccbp.tech',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
      description:
        'An app that lets users search Wikipedia articles with instant results.',
    },
    {
      projectId: 14,
      category: 'RESPONSIVE',
      title: 'Food Munch',
      projectUrl: 'https://mdumarfoodmuch.ccbp.tech',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
      description:
        'A food delivery platform showcasing different restaurants & dishes.',
    },
    {
      projectId: 15,
      category: 'RESPONSIVE',
      title: 'Speed Typing Test',
      projectUrl: 'https://mdumartypetest.ccbp.tech',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
      description:
        'A typing test application to measure typing speed with a quote generator.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'STATIC', 'DYNAMIC', 'GAME', 'RESPONSIVE'];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projectsList 
    : projectsList.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      STATIC: 'bg-green-500',
      DYNAMIC: 'bg-blue-500', 
      GAME: 'bg-purple-500',
      RESPONSIVE: 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.projectId} 
              project={project} 
              getCategoryColor={getCategoryColor}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

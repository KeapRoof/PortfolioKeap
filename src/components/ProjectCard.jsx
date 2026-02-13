import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className={`group relative bg-white border-2 border-gray-200 p-8 hover:shadow-lg transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00B8DE'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold uppercase" style={{backgroundColor: '#00B8DE'}}>
          Featured
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3 transition-colors group-hover-title">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs font-mono border"
            style={{
              backgroundColor: 'rgba(0, 184, 222, 0.1)',
              color: '#00B8DE',
              borderColor: 'rgba(0, 184, 222, 0.2)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a 
        href={project.link}
        className="inline-flex items-center gap-2 hover:gap-4 transition-all font-bold uppercase text-sm"
        style={{color: '#00B8DE'}}
      >
        View Project <ExternalLink size={16} />
      </a>

      <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{backgroundColor: '#00B8DE'}} />
    </div>
  );
};

export default ProjectCard;

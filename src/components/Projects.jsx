import React from 'react';
import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 style={{color: '#00B8DE'}} size={32} />
          <h2 className="text-5xl font-black tracking-tighter uppercase">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;

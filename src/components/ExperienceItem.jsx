import React from 'react';

const ExperienceItem = ({ job, index }) => {
  return (
    <div 
      className="relative pl-8 border-l-2 border-gray-200 transition-colors hover-border-primary"
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00B8DE'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rotate-45" style={{backgroundColor: '#00B8DE'}} />
      
      <div className="pb-12">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1" style={{color: '#00B8DE'}}>
              {job.role}
            </h3>
            <p className="text-xl text-gray-900">
              {job.company}
            </p>
          </div>
          <span className="px-4 py-2 bg-gray-100 border border-gray-200 text-sm font-mono">
            {job.period}
          </span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {job.description}
        </p>

        <ul className="space-y-3">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1" style={{color: '#00B8DE'}}>▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;

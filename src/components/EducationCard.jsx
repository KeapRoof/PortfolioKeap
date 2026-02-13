import React from 'react';

const EducationCard = ({ edu, index }) => {
  return (
    <div 
      className="bg-white border-2 border-gray-200 p-8 hover:shadow-lg transition-all group"
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00B8DE'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
    >
      <h3 className="text-xl font-bold mb-2 group-hover-title transition-colors">
        {edu.degree}
      </h3>
      <p className="text-lg mb-2" style={{color: '#00B8DE'}}>
        {edu.institution}
      </p>
      <p className="text-sm text-gray-500 font-mono mb-4">
        {edu.period}
      </p>
      <p className="text-gray-600">
        {edu.details}
      </p>
    </div>
  );
};

export default EducationCard;

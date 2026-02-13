import React from 'react';
import { GraduationCap } from 'lucide-react';
import EducationCard from './EducationCard';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap style={{color: '#00B8DE'}} size={32} />
          <h2 className="text-5xl font-black tracking-tighter uppercase">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

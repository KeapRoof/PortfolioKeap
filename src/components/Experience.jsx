import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceItem from './ExperienceItem';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Experience = ({ experience }) => {
  const { lang } = useLang();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase style={{color: '#00B8DE'}} size={32} />
          <h2 className="text-5xl font-black tracking-tighter uppercase">{t.title}</h2>
        </div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <ExperienceItem key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

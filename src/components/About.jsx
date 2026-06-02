import React from 'react';
import { User } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = ({ skills }) => {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <User style={{color: '#00B8DE'}} size={32} />
          <h2 className="text-5xl font-black tracking-tighter uppercase">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{t.p1}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.p2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.p3}</p>
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-bold mb-3 uppercase tracking-wider text-sm" style={{color: '#00B8DE'}}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-50 border border-gray-200 text-sm hover:border-gray-300 transition-colors hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

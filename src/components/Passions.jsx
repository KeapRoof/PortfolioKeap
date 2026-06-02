import React from 'react';
import { Heart } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Passions = () => {
  const { lang } = useLang();
  const t = translations[lang].passions;

  return (
    <section id="passions" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Heart style={{ color: '#00B8DE' }} size={32} />
          <h2 className="text-5xl font-black tracking-tighter uppercase">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.items.map((passion) => (
            <div
              key={passion.title}
              className="group border-2 border-gray-200 p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00B8DE'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <div className="text-5xl mb-4">{passion.emoji}</div>
              <h3 className="text-2xl font-bold mb-3">{passion.title}</h3>
              <p className="text-gray-600 leading-relaxed">{passion.description}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#00B8DE' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passions;

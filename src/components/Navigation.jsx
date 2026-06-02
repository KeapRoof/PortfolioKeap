import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navigation = ({ scrollY, activeSection, scrollToSection }) => {
  const { lang, toggleLang } = useLang();
  const t = translations[lang].nav;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span style={{color: '#00B8DE'}}>{'<'}</span>
            Keap
            <span style={{color: '#00B8DE'}}>{'/>'}</span>
          </div>

          <div className="hidden md:flex gap-8">
            {t.sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm uppercase tracking-wider transition-colors relative group ${
                  activeSection === id ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'
                }`}
                style={activeSection === id ? {color: '#00B8DE'} : {}}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                    activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{backgroundColor: '#00B8DE'}}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-sm font-bold uppercase tracking-wider px-3 py-1 border-2 transition-all hover:scale-105"
              style={{borderColor: '#00B8DE', color: '#00B8DE'}}
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="https://github.com/KeapRoof" className="text-gray-500 hover:text-gray-900 transition-colors hover-primary">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/haithemh" className="text-gray-500 hover:text-gray-900 transition-colors hover-primary">
              <Linkedin size={20} />
            </a>
            <a href="mailto:haithemh.pro@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors hover-primary">
              <Mail size={20} />
            </a>
            <a href="tel:+33611441521" className="text-gray-500 hover:text-gray-900 transition-colors hover-primary">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

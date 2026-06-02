import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer className="py-20 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          {t.heading} <span style={{color: '#00B8DE'}}>{t.headingAccent}</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">{t.tagline}</p>

        <a
          href="mailto:haithemh.pro@gmail.com"
          className="inline-block px-12 py-5 text-white font-bold uppercase text-lg tracking-wider hover:opacity-90 transition-all hover:scale-105"
          style={{backgroundColor: '#00B8DE'}}
        >
          {t.cta}
        </a>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/KeapRoof" className="text-gray-500 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#00B8DE'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/haithemh" className="text-gray-500 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#00B8DE'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
            <Linkedin size={24} />
          </a>
          <a href="mailto:haithemh.pro@gmail.com" className="text-gray-500 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#00B8DE'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
            <Mail size={24} />
          </a>
          <a href="tel:+33611441521" className="text-gray-500 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#00B8DE'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>
            <Phone size={24} />
          </a>
        </div>
        <p className="text-gray-400 mt-12 text-sm">
          © {new Date().getFullYear()} {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

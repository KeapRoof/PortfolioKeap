import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Navigation = ({ scrollY, activeSection, scrollToSection }) => {
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
            {['about', 'projects', 'experience', 'education'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-colors relative group ${
                  activeSection === section ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'
                }`}
                style={activeSection === section ? {color: '#00B8DE'} : {}}
              >
                {section}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{backgroundColor: '#00B8DE'}}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/KeapRoof" 
              className="text-gray-500 hover:text-gray-900 transition-colors hover-primary"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/haithemh" 
              className="text-gray-500 hover:text-gray-900 transition-colors hover-primary"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:haithemh.pro@gmail.com" 
              className="text-gray-500 hover:text-gray-900 transition-colors hover-primary"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+33611441521" 
              className="text-gray-500 hover:text-gray-900 transition-colors hover-primary"
              >
              <Phone size={20}/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

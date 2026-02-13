import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TEXTS = ['Haithem', 'HADJ AZZEM', 'Software Engineer'];

function useTypewriter(texts) {
  const [displayed, setDisplayed] = useState(['', '', '']);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentText = 0;
    let currentChar = 0;
    let timeout;

    function type() {
      if (currentText >= texts.length) {
        setDone(true);
        return;
      }
      const full = texts[currentText];
      if (currentChar <= full.length) {
        setDisplayed(prev => {
          const next = [...prev];
          next[currentText] = full.slice(0, currentChar);
          return next;
        });
        currentChar++;
        timeout = setTimeout(type, 60);
      } else {
        currentText++;
        currentChar = 0;
        timeout = setTimeout(type, 200);
      }
    }

    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [texts]);

  return { displayed, done };
}

const Hero = ({ isLoaded, scrollToSection }) => {
  const { displayed, done } = useTypewriter(TEXTS);

  const cursor = (index) =>
    !done && displayed[index].length < TEXTS[index].length
      ? <span className="animate-pulse">|</span>
      : null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className={`max-w-6xl mx-auto px-6 z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Name Placeholder */}
            <div className="space-y-2" style={{ 
              animation: 'slideInLeft 0.8s ease-out',
              animationDelay: '0.2s',
              animationFillMode: 'backwards'
            }}>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                <span className="block text-gray-900">{displayed[0]}{cursor(0)}</span>
                <span className="block" style={{color: '#00B8DE'}}>{displayed[1]}{cursor(1)}</span>
              </h1>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-none tracking-tighter" style={{
              animation: 'slideInLeft 0.8s ease-out',
              animationDelay: '0.4s',
              animationFillMode: 'backwards'
            }}>
              {displayed[2]}{cursor(2)}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light" style={{ 
              animation: 'fadeIn 0.8s ease-out',
              animationDelay: '0.6s',
              animationFillMode: 'backwards'
            }}>
              Passionate about new technologies, I aim to master the entire development chain while deepening my understanding of the theoretical foundations of the tools and systems I use.
            </p>

            <div className="flex flex-wrap gap-4 pt-4" style={{ 
              animation: 'fadeIn 0.8s ease-out',
              animationDelay: '0.8s',
              animationFillMode: 'backwards'
            }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 text-white font-bold uppercase text-sm tracking-wider hover:opacity-90 transition-all hover:scale-105"
                style={{backgroundColor: '#00B8DE'}}
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 font-bold uppercase text-sm tracking-wider transition-all hover:scale-105 hover:bg-gray-50"
                style={{borderColor: '#00B8DE', color: '#00B8DE'}}
              >
                About Me
              </button>
              <a 
                href="/Haithem_CV.pdf"
                download="Haithem_CV.pdf"
                className="px-8 py-4 bg-gray-900 text-white font-bold uppercase text-sm tracking-wider hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Photo Placeholder */}
          <div className="flex justify-center md:justify-end" style={{ 
            animation: 'fadeIn 0.8s ease-out',
            animationDelay: '0.4s',
            animationFillMode: 'backwards'
          }}>
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-lg border-4 bg-white shadow-2xl transition-all duration-500 group-hover:scale-105" style={{borderColor: '#00B8DE'}}>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHoBTEGaMCCag/profile-displayphoto-crop_800_800/B4EZrLBWTsGYAM-/0/1764342720221?e=1772668800&v=beta&t=GV15zUewOfRoAf0InGKrvRbJlFDf9Ei10HXT5JhUYx4"
                  alt="Haithem HADJ AZZEM"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative corner accent */}

              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 rounded-lg opacity-30 animate-pulse" style={{borderColor: '#00B8DE'}} />
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 transition-colors"
        onMouseEnter={(e) => e.currentTarget.style.color = '#00B8DE'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

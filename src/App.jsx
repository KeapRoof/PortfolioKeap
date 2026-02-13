import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import { projects, experience, education, skills } from './data/portfolioData';

export default function DeveloperPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" style={{
      '--primary': '#00B8DE',
      '--secondary': '#ffffff',
      '--background': '#f3f4f6'
    }}>
      <Navigation 
        scrollY={scrollY} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <Hero 
        isLoaded={isLoaded} 
        scrollToSection={scrollToSection} 
      />
      
      <About skills={skills} />
      
      <Projects projects={projects} />
      
      <Experience experience={experience} />
      
      <Education education={education} />
      
      <Footer />

      <style jsx global>{`
        .hover-primary:hover {
          color: #00B8DE !important;
        }
        .group:hover .group-hover-title {
          color: #00B8DE;
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="display-lg mb-6" style={{ fontSize: 'clamp(40px, 8vw, 72px)' }}>
            {hero.name}
          </h1>

          {/* Title */}
          <h2 className="display-md text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            {hero.title}
          </h2>

          {/* Subtitle */}
          <p className="body-lg max-w-2xl mx-auto mb-8">
            {hero.subtitle}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <MapPin size={18} className="text-blue-400" />
            <span className="text-gray-400">{hero.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
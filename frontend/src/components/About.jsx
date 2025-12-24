import React from 'react';
import { Code, Sparkles, Target } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Code,
      title: 'Backend Specialist',
      description: 'Expert in Node.js & Express'
    },
    {
      icon: Sparkles,
      title: 'AI Enthusiast',
      description: 'Learning Agentic AI & Robotics'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Building scalable solutions'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="display-md mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="body-lg text-center max-w-3xl mx-auto mb-8">
              {about.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                  <item.icon size={28} className="text-blue-400" />
                </div>
                <h3 className="h3 mb-2">{item.title}</h3>
                <p className="body-md text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="card">
            <h3 className="h2 mb-6 text-center">Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {about.focus.map((area, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
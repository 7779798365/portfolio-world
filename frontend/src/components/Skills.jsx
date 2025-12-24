import React from 'react';
import { Server, Layout, Database, Brain, Wrench } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'blue'
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: skills.frontend,
      color: 'purple'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'green'
    },
    {
      title: 'AI & Emerging Tech',
      icon: Brain,
      skills: skills.aiTech,
      color: 'pink'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: skills.tools,
      color: 'orange'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-md mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Comprehensive skill set spanning backend development, frontend technologies, and emerging AI innovations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.bg} rounded-lg`}>
                    <category.icon size={24} className={colors.text} />
                  </div>
                  <h3 className="h3">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} text-sm font-medium transition-all hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
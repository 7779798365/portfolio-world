import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-md mb-4">Education & Learning</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Continuous learning journey in backend development, AI, and modern technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-0 md:pl-20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 bg-blue-400 rounded-full border-4 border-gray-900 hidden md:block"></div>

                  {/* Content Card */}
                  <div className="card">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <GraduationCap size={24} className="text-blue-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="h3">{item.institution}</h3>
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === 'Ongoing'
                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                            }`}
                          >
                            {item.status === 'Ongoing' && (
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            )}
                            {item.status}
                          </span>
                        </div>
                        <p className="body-md mb-2">{item.degree}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={14} />
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="body-md text-gray-400">
            Passionate about backend development, AI, robotics, and continuous learning through hackathons and real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
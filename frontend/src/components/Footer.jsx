import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { social, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: social.github,
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: social.linkedin,
      icon: Linkedin
    },
    {
      name: 'Email',
      url: `mailto:${contact.email}`,
      icon: Mail
    }
  ];

  return (
    <footer className="relative" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="h3 mb-4">Muhammad Moosa</h3>
            <p className="body-md text-gray-400 mb-4">
              Building scalable backend systems and AI-driven solutions.
            </p>
            <p className="text-sm text-gray-500">
              Based in {contact.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon size={18} className="text-gray-400 hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} Muhammad Moosa. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-sm text-gray-400 flex items-center gap-2">
              Made with <Heart size={14} className="text-red-400 fill-red-400" /> using React & FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
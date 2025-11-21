import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-dark pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-primary to-tech-neon">
              TechNova
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Architects of tomorrow's digital landscape. Transforming businesses through innovation, code, and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-neon transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-neon transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-neon transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-neon transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-tech-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tech-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tech-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tech-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tech-primary transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-tech-primary transition-colors">About Us</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-tech-primary transition-colors">Training & Courses</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-tech-primary transition-colors">Our Work</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-tech-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-tech-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-tech-neon flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">123 Innovation Drive, Tech City, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-tech-neon flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-tech-neon flex-shrink-0" size={18} />
                <span className="text-gray-400">hello@technova.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TechNova Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

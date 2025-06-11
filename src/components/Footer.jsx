// src/components/Footer.jsx
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
      <footer id="contact" className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="/placeholder-logo.svg" alt="AI Phone Logo" className="h-7 w-7" />
              <span className="text-lg font-bold text-white">AI Phone</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Github /></a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm mt-8 pt-8 border-t border-slate-800">
            © {new Date().getFullYear()} AI Phone, Inc. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;
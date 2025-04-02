
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              John <span className="text-accent">Doe</span>
            </h2>
            <p className="text-white/70 max-w-md">
              Creating purposeful digital experiences that elevate brands and delight users.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex space-x-4 justify-center md:justify-end mb-4">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">GitHub</a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">Dribbble</a>
            </div>
            <p className="text-white/60 text-sm">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

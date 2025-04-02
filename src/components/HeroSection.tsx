
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-20"
    >
      <div className="absolute w-full h-full bg-grid-pattern opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto section-padding grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <span className="inline-block text-sm md:text-base font-medium bg-accent/10 text-accent px-4 py-1 rounded-full">
            UX Designer & Developer
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I create <span className="text-accent">digital experiences</span> that matter
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
            Helping brands stand out with purposeful design and strategic development solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="btn-accent flex items-center justify-center gap-2 group"
            >
              Let's Connect
              <ArrowRight 
                size={16} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </button>
            
            <a 
              href="#portfolio" 
              className="btn-secondary flex items-center justify-center"
            >
              View Portfolio
            </a>
          </div>
        </div>
        
        <div className="relative aspect-square">
          <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white/80 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Professional portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

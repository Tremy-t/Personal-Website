
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleRevealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    // Initialize reveal elements on first load
    handleRevealElements();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleRevealElements);
    
    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleRevealElements);
  }, []);
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="reveal">
        <AboutSection />
      </div>
      
      <div className="reveal">
        <PortfolioSection />
      </div>
      
      <div className="reveal">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from "react";
import { Briefcase, Code, PenTool, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { 
      icon: <PenTool className="w-8 h-8 text-accent" />, 
      title: "UI/UX Design", 
      description: "Creating intuitive and engaging user experiences through thoughtful interface design."
    },
    { 
      icon: <Code className="w-8 h-8 text-accent" />, 
      title: "Development", 
      description: "Building responsive, high-performance websites and applications using modern technologies."
    },
    { 
      icon: <Users className="w-8 h-8 text-accent" />, 
      title: "Collaboration", 
      description: "Working effectively with teams to deliver cohesive and impactful digital solutions."
    },
    { 
      icon: <Briefcase className="w-8 h-8 text-accent" />, 
      title: "Strategy", 
      description: "Developing comprehensive approaches to meet business goals and user needs."
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With over 8 years of experience in digital design and development, I help brands
            connect with their audiences through purposeful and engaging digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I began my career in graphic design before transitioning to UI/UX and development.
              This diverse background allows me to blend creativity with technical expertise to
              deliver holistic solutions.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about clean, functional design that solves real problems for users
              while helping businesses achieve their goals.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Education & Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Senior UX Designer</h4>
                <p className="text-muted-foreground">Global Tech Inc. • 2020 - Present</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-muted-foreground">Digital Solutions Agency • 2017 - 2020</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Master of Interaction Design</h4>
                <p className="text-muted-foreground">University of Design • 2015 - 2017</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">My Skills & Expertise</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-secondary/50 p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Complete redesign of an e-commerce platform focusing on improving the checkout flow and product discovery.",
    link: "#",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Interactive financial dashboard allowing users to visualize and analyze their spending patterns.",
    link: "#",
  },
  {
    id: 3,
    title: "Travel Blog Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    description: "Responsive travel blog platform with content management system for travel enthusiasts.",
    link: "#",
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    description: "Mobile application for tracking fitness activities, nutrition, and personal health metrics.",
    link: "#",
  },
];

const categories = ["All", "UI/UX Design", "Web Development", "Web Application", "Mobile App"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore a selection of my recent projects showcasing my skills in design and development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category 
                  ? "bg-accent text-white" 
                  : "bg-white dark:bg-white/90 text-foreground dark:text-black hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-secondary/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 hover:opacity-90 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-primary transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-secondary dark:bg-secondary/80 px-3 py-1 rounded-full text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-accent font-medium hover:underline flex items-center gap-1"
                >
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-background rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
              <div className="relative h-64 md:h-80">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <span className="text-sm bg-secondary dark:bg-secondary/80 px-3 py-1 rounded-full text-muted-foreground">
                    {activeProject.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{activeProject.description}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors flex items-center gap-2"
                  >
                    Visit Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

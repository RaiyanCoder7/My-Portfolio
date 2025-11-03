import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Athleticore",
    description: "AthletiCore is a powerful, intuitive athlete management platform designed to streamline performance tracking, injury management, and career development — empowering both coaches and athletes.",
    tech: "React · Firebase · Node.js",
    link: "https://athlete-management-fb863.web.app/",
    github: "#"
  },
  {
    title: "Sentiment Analysis of Stock Market News",
    description: "A web app for predicting market sentiment using NLP and machine learning algorithms. Analyzes stock market news and social media data to provide real-time sentiment analysis and market predictions based on advanced natural language processing techniques.",
    tech: "Python · Pandas · Scikit-learn · NLP",
    link: "#",
    github: "#"
  },
  {
    title: "WallyCart (Walmart Sparkathon)",
    description: "AR-powered shopping experience with chatbot and immersive UI. Revolutionary shopping platform that combines augmented reality with intelligent chatbot assistance to create an immersive and interactive retail experience for modern consumers.",
    tech: "React · Firebase · AR.js",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center gradient-text">
          Featured Projects
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-sm text-primary/80 font-medium mb-2">Featured Project</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                </div>

                <div className="glass p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground font-mono">
                  {project.tech}
                </p>

                <div className="flex gap-4">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="glass rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-full h-64 bg-card/50 rounded border border-border/30 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

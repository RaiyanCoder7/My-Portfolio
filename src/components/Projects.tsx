import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Athleticore",
    description: "Athlete management web app to track performance and analyze data.",
    tech: "React · Firebase · Node.js",
    link: "https://athlete-management-fb863.web.app/",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Sentiment Analysis of Stock Market News",
    description: "Predicts market sentiment using NLP and machine learning algorithms.",
    tech: "Python · Pandas · Scikit-learn · NLP",
    link: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "WallyCart (Walmart Sparkathon)",
    description: "AR-powered shopping experience with chatbot and immersive UI.",
    tech: "React · Firebase · AR.js",
    link: "#",
    gradient: "from-orange-500 to-red-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-xl`} />
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.tech}</p>
                {project.link !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

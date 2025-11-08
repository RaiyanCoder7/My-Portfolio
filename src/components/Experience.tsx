import { Briefcase, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
const Experience = () => {
  return <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Work Experience
        </h2>

        <div className="glass rounded-3xl p-8 shadow-card animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary animate-glow-pulse">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Full Stack Developer Intern</h3>
                <a
                  href="https://github.com/RaiyanCoder7/Owl-internship-task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-primary font-semibold mb-2">Overload Ware Labs AI</p>
              <p className="text-muted-foreground mb-4">Oct 2025</p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Developed an AI-powered research assistant that helps users collect, organize, and analyze research documents efficiently
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Integrated semantic search and AI-driven insights including summaries, key points, and sentiment analysis for faster knowledge extraction
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Built an intuitive React + Vite dashboard for uploading, categorizing, previewing, and managing documents
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Designed a secure backend using Node.js, Express.js, MongoDB, supporting user authentication and structured data storage
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Deployed the project with Vercel (frontend) and Render (backend) ensuring smooth performance and scalability
                </li>
              </ul>
              
              <Button 
                asChild 
                className="mt-6"
              >
                <a
                  href="https://drive.google.com/file/d/1WVWjEd1glLqyUqHxREhzlHgrkaE1hwGE/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  View Completion Certificate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;
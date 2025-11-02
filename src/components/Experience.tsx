import { Briefcase } from "lucide-react";
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
              <h3 className="text-2xl font-bold mb-2">Full Stack Developer Intern</h3>
              <p className="text-primary font-semibold mb-2">Overload Ware Labs AI</p>
              <p className="text-muted-foreground mb-4">Oct 2025</p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Developed AI-driven web modules using modern full-stack tools
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">▹</span>
                  Built responsive interfaces optimized for user engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;
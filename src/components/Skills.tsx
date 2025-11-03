import { Badge } from "@/components/ui/badge";
import { Flame, Database, Server, Code2, Hexagon, Coffee, Sparkles, Binary, FileCode, Code, Palette, Github, GitBranch } from "lucide-react";
import { LucideIcon } from "lucide-react";

const skills: { name: string; icon: LucideIcon }[] = [
  { name: "JavaScript", icon: FileCode },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Hexagon },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Flame },
  { name: "Python", icon: Coffee },
  { name: "Java", icon: Coffee },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Gemini API", icon: Sparkles },
  { name: "DSA", icon: Binary }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-base border-2 border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110 cursor-default rounded-full flex items-center gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-5 h-5" />
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

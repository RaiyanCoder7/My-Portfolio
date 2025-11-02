import { Badge } from "@/components/ui/badge";

const skills = [
  "Firebase",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Gemini API",
  "Vertex AI",
  "Streamlit",
  "DSA"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-3 text-base border-2 border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110 cursor-default rounded-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

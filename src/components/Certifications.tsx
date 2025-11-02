import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  "Gen AI Exchange Program",
  "Neo4j Certified Professional",
  "GDG Solution Challenge India",
  "Naukri Campus Young Turks 25",
  "Postman API Fundamentals Student Expert"
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

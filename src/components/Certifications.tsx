import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Gen AI Exchange Program",
    link: "https://certificate.hack2skill.com/user/genai5/2025H2S04GENAI-A500167"
  },
  {
    name: "Neo4j Certified Professional",
    link: "https://graphacademy.neo4j.com/c/f23dc65a-b9d6-42b0-a14d-e7c0ec304b01/"
  },
  {
    name: "GDG Solution Challenge India",
    link: "https://certificate.hack2skill.com/user/gdgscsubmissions/2025H2S01GSC-I08025"
  },
  {
    name: "Naukri Campus Young Turks 25",
    link: "https://drive.google.com/file/d/1MikPe0giUGJyZu7gUurqfo9whsX5qzCQ/view?usp=drivesdk"
  },
  {
    name: "Postman API Fundamentals Student Expert",
    link: "https://api.badgr.io/public/assertions/25EzeQ8KRFuZNfSc3O0cwA"
  }
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
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{cert.name}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group"
              >
                View Certificate
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

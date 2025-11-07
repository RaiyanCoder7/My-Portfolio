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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Certifications & Achievements
        </h2>

        <div className="flex flex-col gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Decorative Left Side */}
                <div className="md:w-64 h-32 md:h-auto bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-16 w-16 text-primary/40" />
                  </div>
                  {/* Decorative shapes */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/30 blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-secondary/30 blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-primary/20"></div>
                </div>

                {/* Content Right Side */}
                <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Certificate of Achievement
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      This certification validates professional expertise and successful completion of the program requirements.
                    </p>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium self-start"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
